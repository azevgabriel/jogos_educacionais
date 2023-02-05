import { Navigate, useParams } from 'react-router-dom';

import notAvailable from '@assets/images/notAvailable.png';
import { LessonOneWrapper } from '@components/LessonOneWrapper';
import { useLessonOne } from '@hooks/useLessonOne';
import { checkDevice } from '@utils/device';
import { Container } from './styles';

interface GamesProps {}

export const Game = ({}: GamesProps) => {
  const { animal } = useLessonOne();
  const { nome } = useParams();

  const typeOfEvent = checkDevice();

  switch (nome) {
    case 'letras':
      return (
        <Container>
          <LessonOneWrapper animal={animal} typeOfEvent={typeOfEvent} />
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
          <img className="notAvailable" src={notAvailable} />
        </Container>
      );
    default:
      return <Navigate to="/" replace={true} />;
  }
};
