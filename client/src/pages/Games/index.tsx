import { useParams, Navigate } from 'react-router-dom';
import EmBreve from "../../assets/images/trophy.png"
import { LessonOneWrapper } from '../../components/LessonOneWrapper';
import { useLessonOne } from '../../hooks/UseLessonOne';
import { Container } from './styles';

interface GamesProps {}

export const Game = ({}: GamesProps) => {
  const { animal } = useLessonOne();
  const { nome } = useParams();

  switch (nome) {
    case 'letras':
      return (
        <Container>
          <LessonOneWrapper animal={animal} />
        </Container>
      );
    case 'ligar':
      return <Container><img src={EmBreve}/></Container>;
    case 'silabas':
      return <Container><img src={EmBreve}/></Container>;
    case 'memoria':
      return <Container><img src={EmBreve}/></Container>;
    default:
      return <Navigate to="/" replace={true} />;
  }
};
