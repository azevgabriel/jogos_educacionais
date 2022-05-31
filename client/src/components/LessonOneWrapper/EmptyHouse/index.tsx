import { useCallback, useEffect, useState } from 'react';
import { useLessonOne } from '../../../hooks/UseLessonOne';
import { Container } from './styles';

interface EmptyHouseProps {
  solution: string;
  secondClass: string;
}

export const EmptyHouse = ({ secondClass, solution }: EmptyHouseProps) => {
  const [emptyzone, setEmptyzone] = useState<Element | null>(null);
  const [isCorrect, setIsCorrect] = useState<'true' | 'false' | 'null'>('null');

  const { dropzoneModifier } = useLessonOne();

  const checkHouse = useCallback(
    (el: Element, solution: string) => {
      setTimeout(() => {
        if (!el.children[0]?.children[0]?.innerHTML) {
          setIsCorrect('null');
          return;
        }
        if (el.children[0]?.children[0]?.innerHTML === solution)
          setIsCorrect('true');
        else setIsCorrect('false');
      }, 1000);
    },
    [emptyzone]
  );

  useEffect(() => {
    let emptyzoneData = document.querySelector(`.${secondClass}`);
    setEmptyzone(emptyzoneData);
  }, [secondClass]);

  useEffect(() => {
    if (dropzoneModifier === emptyzone?.className) {
      setEmptyzone(emptyzone);
      checkHouse(emptyzone, solution);
    }
  }, [dropzoneModifier]);

  useEffect(() => {
    if (emptyzone) {
      emptyzone.addEventListener('dragleave', () =>
        checkHouse(emptyzone, solution)
      );
      emptyzone.addEventListener('touchend', () =>
        checkHouse(emptyzone, solution)
      );
    }
  }, [secondClass, solution, checkHouse]);

  return (
    <Container className={`dropzone ${secondClass}`} isCorrect={isCorrect} />
  );
};
