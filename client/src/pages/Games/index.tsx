import { useParams } from 'react-router-dom';

import { LessonOneWrapper } from '../../components/LessonOneWrapper';
import { useLessonOne } from '../../hooks/UseLessonOne';
import { NotFound } from '../404';
import { Container } from './styles';

interface GamesProps {}

export const Game = ({}: GamesProps) => {
  const { animal } = useLessonOne();
  const { nome } = useParams();

  switch (nome) {
    case 'palavras':
      return (
        <Container>
          <LessonOneWrapper animal={animal} />
        </Container>
      );
    case 'ligar':
      return <Container>Em breve!</Container>;
    case 'silabas':
      return <Container>Em breve!</Container>;
    case 'memoria':
      return <Container>Em breve!</Container>;
    default:
      return <NotFound />;
  }
};
