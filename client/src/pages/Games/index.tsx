import { ReactElement, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { EventTypes } from '@interfaces/device';

import { checkDevice } from '@utils/device';

import { Anagram } from './Anagram';
import { HuntingWords } from './HuntingWords';
import { MemoryGame } from './MemoryGame';
import { Quiz } from './Quiz';
import { Container } from './styles';

export const Game = () => {
  const { nome } = useParams();

  const [typeOfEvent, setTypeOfEvent] = useState<EventTypes | undefined>(
    undefined
  );

  useEffect(() => {
    setTypeOfEvent(checkDevice());
  }, [navigator.userAgent]);

  if (!typeOfEvent) return null;

  let el: ReactElement;

  switch (nome) {
    case 'letras':
      el = <Anagram typeOfEvent={typeOfEvent} />;
      break;
    case 'caça':
      el = <HuntingWords />;
      break;
    case 'quiz':
      el = <Quiz />;
      break;
    case 'memoria':
      el = <MemoryGame />;
      break;
    default:
      return <Navigate to="/jogos" replace={true} />;
  }

  return <Container>{el}</Container>;
};
