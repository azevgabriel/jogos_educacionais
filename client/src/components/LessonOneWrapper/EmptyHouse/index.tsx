import { useCallback, useEffect, useState } from 'react';
import { Container } from './styles';

interface EmptyHouseProps {
  solution: string;
  secondClass: string;
}

export const EmptyHouse = ({ secondClass, solution }: EmptyHouseProps) => {
  const [emptyzone, setEmptyzone] = useState<Element | null>(null);
  const [isCorrect, setIsCorrect] = useState<'true' | 'false' | 'null'>('null');

  const checkHouse = useCallback(
    (solution: string) => {
      if (emptyzone)
        setTimeout(() => {
          if (!emptyzone.children[0]?.children[0]?.innerHTML) {
            setIsCorrect('null');
            return;
          }
          if (emptyzone.children[0]?.children[0]?.innerHTML === solution)
            setIsCorrect('true');
          else setIsCorrect('false');
        }, 1000);
    },
    [emptyzone]
  );

  useEffect(() => {
    let emptyzoneData = document.querySelector(`.${secondClass}`);
    if (emptyzoneData) {
      setEmptyzone(emptyzoneData);
      emptyzoneData.addEventListener('dragleave', () => checkHouse(solution));
    }
  }, [secondClass, solution, checkHouse]);

  return (
    <Container className={`dropzone ${secondClass}`} isCorrect={isCorrect} />
  );
};
