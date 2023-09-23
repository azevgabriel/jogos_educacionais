import React, { useMemo, useState } from 'react';

import { Button, Container, ScoreWrapper } from './styles';

import { quizzes } from '@assets/quizzes';
import { CommonBody } from '@components/CommonBody';
import { HeaderBar } from '@components/HeaderBar';
import { GiOnTarget } from '@react-icons/all-files/gi/GiOnTarget';

export const Quiz: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const { image, alternatives, indexCorrectAnswer, question } = useMemo(() => {
    return quizzes[index];
  }, [index]);

  return (
    <CommonBody
      background="adventureTime"
      header={
        <HeaderBar
          title={{
            complete: 'Quiz',
            resume: 'Quiz',
          }}
          children={
            <ScoreWrapper>
              <div className="content">
                <div className="content-title">
                  <h4>ACERTOS</h4>
                </div>
                <div className="content-score">
                  <GiOnTarget size={30} />
                  <span>
                    {index + 1}/{quizzes.length}
                  </span>
                </div>
              </div>
            </ScoreWrapper>
          }
        />
      }
    >
      <Container src={image}>
        <div className="image" />
        <div className="content">
          <h1 className="content-title">{question}</h1>
          <div className="content-options">
            {alternatives.map((alternative, alternativeIndex) => (
              <Button
                onClick={() => {
                  if (
                    index + 1 === quizzes.length &&
                    alternativeIndex === indexCorrectAnswer
                  ) {
                    setIndex(0);
                    return;
                  }
                  if (alternativeIndex === indexCorrectAnswer) {
                    setIndex(index + 1);
                  }
                }}
              >
                <p className="alternative">{alternativeIndex + 1}.</p>
                <p>{alternative}</p>
              </Button>
            ))}
          </div>
          <div />
        </div>
      </Container>
    </CommonBody>
  );
};
