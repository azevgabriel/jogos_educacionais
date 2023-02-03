import {
  createContext,
  useCallback,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';

import { words } from '../assets/words';
import { WordsKey } from '../components/LessonOneWrapper';
import { ReportProps } from '../interfaces/reports';

interface LessonOneContextData {
  dropzoneModifier: string | null;
  catchDropzoneModifier: (className: string) => void;
  nextAnimal: () => void;
  previousAnimal: () => void;
  animal: WordsKey;
  saveDropzoneStats: (
    className: string,
    isCorrect: 'true' | 'false' | 'null'
  ) => void;
  modalOpen: boolean;
  closeMenu: () => void;
  index: number;
  restart: () => void;
  catchMousePosition: (e: DragEvent | TouchEvent, element: Element | null) => void;
  getReport: () => ReportProps[]
}

interface LessonOneProviderProps {
  children: ReactNode;
}

const LessonOneContext = createContext<LessonOneContextData>(
  {} as LessonOneContextData
);

interface HouseState {
  className: string;
  isCorrect: 'true' | 'false' | 'null';
}

const LessonOneProvider = ({ children }: LessonOneProviderProps) => {
  const wordList = Object.keys(words) as WordsKey[];
  const word = wordList[Math.floor(Math.random() * wordList.length)];

  const [dropzoneModifier, setDropzoneModifier] = useState<string | null>(null);
  const [animal, setAnimal] = useState(word);
  const [index, setIndex] = useState<number>(0);
  const [housesStats, setHousesStats] = useState<HouseState[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  var report: ReportProps | undefined
  var reports: ReportProps[] = []
  var startTime: number

  const closeMenu = () => {
    setModalOpen(false);
    setHousesStats([]);
  };

  const getReport = () => {
    if(report) {
      reports.push(report)
      report = undefined
    }

    console.log(reports)

    return reports
  }

  const catchMousePosition = (e: DragEvent | TouchEvent, element: Element | null) => {
    const letter = element?.children[0].textContent ?? ''
    let x: number
    let y: number

    if (e instanceof TouchEvent) {
      x = Number(e.touches[0].clientX);
      y = Number(e.touches[0].clientY);
    } else {
      x = Number(e.clientX);
      y = Number(e.clientY);
    }
    
    if(!report) {
      startTime = Date.now()
      report = {
        letter: letter,
        positions: [{x, y}],
        time: startTime,
      }
    } else if(report?.letter === letter) {
      report.positions.push({x, y})
      report.time = Date.now() - startTime
    } else {
      reports.push(report)
      report = undefined
    }
  }

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

  const saveDropzoneStats = useCallback(
    (className: string, isCorrect: 'true' | 'false' | 'null') => {
      let aux = housesStats;

      const ifExistsSameClass = aux.find(
        (house) => house.className === className
      );

      if (ifExistsSameClass) {
        const newHousesStates = aux.map((house) => {
          if (house.className === className) {
            return {
              className,
              isCorrect,
            };
          }
          return house;
        });

        setHousesStats(newHousesStates);
      } else {
        aux.push({
          className,
          isCorrect,
        });
        setHousesStats(aux);
      }
    },
    [housesStats]
  );

  useEffect(() => {
    const countCorrectsHouses = housesStats.filter(
      (house) => house.isCorrect === 'true'
    )
    if (countCorrectsHouses.length === animal.length) {
      setModalOpen(true);  
    }
  }, [housesStats, animal]);

  return (
    <LessonOneContext.Provider
      value={{
        dropzoneModifier,
        catchDropzoneModifier,
        nextAnimal,
        previousAnimal,
        animal,
        saveDropzoneStats,
        modalOpen,
        closeMenu,
        index,
        restart,
        catchMousePosition,
        getReport
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

export { LessonOneProvider, useLessonOne }

