import { Navigate, useParams } from 'react-router-dom';

import { LessonOneWrapper } from '../../components/LessonOneWrapper';
import { useLessonOne } from '../../hooks/UseLessonOne';
import { checkDevice } from '../../utils/device';
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
      return <Container>Em breve!</Container>;
    case 'silabas':
      return <Container>Em breve!</Container>;
    case 'memoria':
      return <Container>Em breve!</Container>;
    default:
      return <Navigate to="/" replace={true} />;
  }
};
