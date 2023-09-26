import React, { useMemo, useState } from 'react';

import { Container, ScoreWrapper } from './styles';

import { quizzes } from '@assets/quizzes';
import { CommonBody } from '@components/CommonBody';
import { HeaderBar } from '@components/HeaderBar';
import { GiOnTarget } from '@react-icons/all-files/gi/GiOnTarget';
import { QuizOption } from './Option';

export const Quiz: React.FC = () => {
  const [index, setIndex] = useState<number>(9);

  const { id, image, alternatives, indexCorrectAnswer, question } =
    useMemo(() => {
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
      <Container src={image?.src ?? ''}>
        <div className="image">
          <a href={image?.credits}>{image?.author}</a>
        </div>
        <div className="content">
          <h1 className="content-title">{question}</h1>
          <div className="content-options">
            {alternatives.map((alternative, alternativeIndex) => (
              <QuizOption
                key={id + alternative}
                alternative={{
                  index: alternativeIndex,
                  text: alternative,
                }}
                index={index}
                indexCorrectAnswer={indexCorrectAnswer}
                quizzesLength={quizzes.length}
                setIndex={setIndex}
              />
            ))}
          </div>
          <div />
        </div>
      </Container>
    </CommonBody>
  );
};
