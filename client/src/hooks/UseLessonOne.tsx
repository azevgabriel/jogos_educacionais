import {
  createContext,
  useCallback,
  useContext,
  ReactNode,
  useState,
} from 'react';

import { words } from '../assets/words';
import { WordsKey } from '../components/LessonOneWrapper';

interface LessonOneContextData {
  dropzoneModifier: string | null;
  catchDropzoneModifier: (className: string) => void;
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

  const catchDropzoneModifier = useCallback((className: string) => {
    console.log('catchDropzoneModifier', className);
    setDropzoneModifier(className);
  }, []);

  return (
    <LessonOneContext.Provider
      value={{
        dropzoneModifier,
        catchDropzoneModifier,
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
