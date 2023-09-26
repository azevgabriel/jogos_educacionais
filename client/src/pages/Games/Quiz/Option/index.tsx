import React, { useCallback, useState } from 'react';
import { Button } from './styles';

interface AlternativeProps {
  index: number;
  text: string;
}

interface QuizOptionProps {
  index: number;
  indexCorrectAnswer: number;
  quizzesLength: number;
  alternative: AlternativeProps;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const QuizOption = ({
  index,
  indexCorrectAnswer,
  quizzesLength,
  alternative,
  setIndex,
}: QuizOptionProps) => {
  const [clicked, setClicked] = useState(false);

  const onClick = useCallback(() => {
    if (alternative.index !== indexCorrectAnswer || clicked) {
      setClicked(true);
      return;
    }

    if (alternative.index === indexCorrectAnswer) {
      if (index + 1 === quizzesLength) setIndex(0);
      else setIndex((oldIndex) => oldIndex + 1);
    }
  }, [index, indexCorrectAnswer]);

  return (
    <Button clicked={clicked} onClick={onClick}>
      <p className="alternative">{alternative.index + 1}.</p>
      <p>{alternative.text}</p>
    </Button>
  );
};
