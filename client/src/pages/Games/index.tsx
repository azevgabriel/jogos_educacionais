import { useParams } from 'react-router-dom';

import notAvailable from '@assets/images/notAvailable.png';
import { CommonBody } from '@components/CommonBody';
import { useLessonOne } from '@hooks/useLessonOne';
import { EventTypes } from '@interfaces/device';
import { checkDevice } from '@utils/device';
import { useEffect, useState } from 'react';
import { LessonOneWrapper } from './LessonOneWrapper';
import MemoryGame from './MemoryGame';
import { Container } from './styles';

export const Game = () => {
  const { animal } = useLessonOne();
  const { nome } = useParams();
  const [typeOfEvent, setTypeOfEvent] = useState<EventTypes | undefined>(
    undefined
  );

  useEffect(() => {
    setTypeOfEvent(checkDevice());
  }, [navigator.userAgent]);

  if (!typeOfEvent) return null;

  switch (nome) {
    case 'letras':
      return (
        <Container>
          <CommonBody isHeader={true} background="farm">
            <LessonOneWrapper animal={animal} typeOfEvent={typeOfEvent} />
          </CommonBody>
        </Container>
      );
    case 'ligar':
      return (
        <Container>
          <img className="notAvailable" src={notAvailable} />
        </Container>
      );
    case 'silabas':
      return (
        <Container>
          <img className="notAvailable" src={notAvailable} />
        </Container>
      );
    case 'memoria':
      return (
        <Container>
          <MemoryGame />
        </Container>
      );
    default:
      return (
        <Container>
          <CommonBody isHeader={true} background="farm">
            <LessonOneWrapper animal={animal} typeOfEvent={typeOfEvent} />
          </CommonBody>
        </Container>
      );
  }
};
