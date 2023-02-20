import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { words } from '@assets/words';
import { ReportProps } from '@interfaces/reports';
import { WordsKey } from '@pages/Games/LessonOneWrapper';
import { useConfig } from './useConfig';

interface LessonOneContextData {
  dropzoneModifier: string | null;
  catchDropzoneModifier: (className: string) => void;
  nextAnimal: () => void;
  previousAnimal: () => void;
  animal: WordsKey;
  modalOpen: boolean;
  closeMenu: () => void;
  index: number;
  restart: () => void;
  verifyIfAllHousesAreFilled: () => void;
  catchMousePosition: (
    e: DragEvent | TouchEvent,
    element: Element | null
  ) => void;
  getReport: () => ReportProps[];
}

interface LessonOneProviderProps {
  children: ReactNode;
}

const LessonOneContext = createContext<LessonOneContextData>(
  {} as LessonOneContextData
);

const LessonOneProvider = ({ children }: LessonOneProviderProps) => {
  const libras = useConfig();

  const [index, setIndex] = useState<number>(0);
  const wordList = Object.keys(words).sort(
    () => Math.random() - 0.5
  ) as WordsKey[];
  const word = wordList[index];

  const [dropzoneModifier, setDropzoneModifier] = useState<string | null>(null);
  const [animal, setAnimal] = useState(word);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  var report: ReportProps | undefined;
  var reports: ReportProps[] = [];
  var startTime: number;
  var positionIndex: number;

  const closeMenu = () => {
    setModalOpen(false);
  };

  const nameProps = useMemo(() => {
    const dropzoneClassnames = animal
      .split('')
      .map((letter, index) => `emptyHouse-${animal}-${index}`);

    const solutions = animal.toUpperCase().split('');

    return {
      dropzoneClassnames,
      solutions,
    };
  }, [animal]);

  const getReport = () => {
    if (report) {
      reports.push(report);
      report = undefined;
    }
    return reports;
  };

  const catchMousePosition = (
    e: DragEvent | TouchEvent,
    element: Element | null
  ) => {
    const letter = element?.children[0].className ?? '';
    let x: number;
    let y: number;

    if (e instanceof TouchEvent) {
      x = Number(e.touches[0].clientX);
      y = Number(e.touches[0].clientY);
    } else {
      x = Number(e.clientX);
      y = Number(e.clientY);
    }

    if (!report) {
      startTime = Date.now();
      positionIndex = 0;
      report = {
        letter: letter,
        positions: [{ index: positionIndex, x, y, time: 0 }],
      };
    } else if (report?.letter === letter) {
      const time = Date.now() - startTime;
      if (report.positions[positionIndex].time !== time) {
        positionIndex++;
        report.positions.push({ index: positionIndex, x, y, time });
      }
    } else {
      (report.totalTime =
        report.positions[report.positions.length - 1].time -
        report.positions[0].time),
        reports.push(report);
      report = undefined;
    }
  };

  const catchDropzoneModifier = useCallback((className: string) => {
    setDropzoneModifier(className);
  }, []);

  const nextAnimal = useCallback(() => {
    const animals = Object.keys(words);
    const nextIndex = index + 1;

    if (nextIndex < animals.length) {
      let nextAnimal = animals[nextIndex];
      setAnimal(nextAnimal as WordsKey);
      setIndex(nextIndex);
    }
  }, [index]);

  const previousAnimal = useCallback(() => {
    const animals = Object.keys(words);
    const previousIndex = index - 1;
    if (previousIndex >= 0) {
      let previousAnimal = animals[previousIndex];
      setAnimal(previousAnimal as WordsKey);
      setIndex(previousIndex);
    }
  }, [index]);

  const restart = useCallback(() => {
    setAnimal(word);
    setIndex(0);
  }, []);

  const verifyIfAllHousesAreFilled = useCallback(() => {
    const classNames = nameProps.dropzoneClassnames;
    const length = classNames.length;
    let countFullHouses = 0;

    classNames.forEach((className) => {
      const dropzone = document.querySelector(`.${className}`) as HTMLElement;
      if (dropzone?.children[0]) {
        countFullHouses += 1;
      }
    });

    if (countFullHouses === length) {
      let countCorrectsHouses = 0;

      classNames.forEach((className, index) => {
        const dropzone = document.querySelector(`.${className}`) as HTMLElement;
        const letter = dropzone?.children[0]?.children[0].className;

        if (letter === nameProps.solutions[index]) {
          countCorrectsHouses += 1;
        }
      });

      if (countCorrectsHouses === animal.length) {
        setModalOpen(true);
      }
    }
  }, [animal]);

  useEffect(() => {
    if (index < wordList.length - 1) {
      nextAnimal();
    } else {
      restart();
    }
  }, [libras]);

  return (
    <LessonOneContext.Provider
      value={{
        dropzoneModifier,
        catchDropzoneModifier,
        nextAnimal,
        previousAnimal,
        animal,
        verifyIfAllHousesAreFilled,
        modalOpen,
        closeMenu,
        index,
        restart,
        catchMousePosition,
        getReport,
      }}
    >
      {children}
    </LessonOneContext.Provider>
  );
};

function useLessonOne(): LessonOneContextData {
  const context = useContext(LessonOneContext);

  if (!context) {
    throw new Error('useLessonOne must be used within an LessonOneProvider');
  }

  return context;
}

export { LessonOneProvider, useLessonOne };
