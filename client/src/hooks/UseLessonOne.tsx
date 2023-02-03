import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { words } from '../assets/words';
import { WordsKey } from '../components/LessonOneWrapper';

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
}

interface LessonOneProviderProps {
  children: ReactNode;
}

const LessonOneContext = createContext<LessonOneContextData>(
  {} as LessonOneContextData
);

const LessonOneProvider = ({ children }: LessonOneProviderProps) => {
  const [dropzoneModifier, setDropzoneModifier] = useState<string | null>(null);
  const [animal, setAnimal] = useState<WordsKey>('Bode');
  const [index, setIndex] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

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
    setAnimal('Bode');
    setIndex(0);
  }, []);

  const verifyIfAllHousesAreFilled = useCallback(() => {
    const classNames = nameProps.dropzoneClassnames;
    const length = classNames.length;
    let countFullHouses = 0;

    classNames.forEach((className) => {
      const dropzone = document.querySelector(`.${className}`) as HTMLElement;
      if (dropzone?.children[0]?.textContent) {
        countFullHouses += 1;
      }
    });

    if (countFullHouses === length) {
      let countCorrectsHouses = 0;

      classNames.forEach((className, index) => {
        const dropzone = document.querySelector(`.${className}`) as HTMLElement;
        const letter = dropzone?.children[0]?.textContent;

        console.log(letter, nameProps.solutions[index]);

        if (letter === nameProps.solutions[index]) {
          countCorrectsHouses += 1;
        }
      });

      if (countCorrectsHouses === animal.length) {
        setModalOpen(true);
      }
    }
  }, [animal]);

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
