import { useLessonOne } from '@hooks/useLessonOne';
import { useCallback, useEffect, useState } from 'react';
import { Container } from './styles';

interface EmptyHouseProps {
  solution: string;
  secondClass: string;
}

export const EmptyHouse = ({ secondClass, solution }: EmptyHouseProps) => {
  const [emptyzone, setEmptyzone] = useState<Element | null>(null);
  const [isCorrect, setIsCorrect] = useState<'true' | 'false' | 'null'>('null');

  const { dropzoneModifier, verifyIfAllHousesAreFilled } = useLessonOne();

  const checkHouse = useCallback(
    (el: Element, solution: string) => {
      if (!el.children[0]?.children[0]?.className) {
        setIsCorrect('null');
        return;
      }
      if (el.children[0]?.children[0]?.className === solution) {
        setIsCorrect('true');
        verifyIfAllHousesAreFilled();
      } else {
        setIsCorrect('false');
        verifyIfAllHousesAreFilled();
      }
    },
    [emptyzone]
  );

  useEffect(() => {
    let emptyzoneData = document.querySelector(`.${secondClass}`);
    setEmptyzone(emptyzoneData);
  }, [secondClass]);

  useEffect(() => {
    if (!emptyzone) return;

    let lastZone = document.querySelector('.last-zone');

    if (lastZone?.classList.contains('initialFullHouse')) {
      lastZone.classList.remove('last-zone');
    }

    if (dropzoneModifier === emptyzone.className) {
      setEmptyzone(emptyzone);
      checkHouse(emptyzone, solution);
    }

    if (lastZone?.className === emptyzone.className) {
      checkHouse(emptyzone, solution);
      lastZone?.classList.remove('last-zone');
    }
  }, [dropzoneModifier]);

  return (
    <Container className={`dropzone ${secondClass}`} isCorrect={isCorrect} />
  );
};
