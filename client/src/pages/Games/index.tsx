import { useParams, Navigate } from 'react-router-dom';
import notAvailable from "../../assets/images/notAvailable.png"
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
      return <Container><img className='notAvailable' src={notAvailable}/></Container>;
    case 'silabas':
      return <Container><img className='notAvailable' src={notAvailable}/></Container>;
    case 'memoria':
      return <Container><img className='notAvailable' src={notAvailable}/></Container>;
    default:
      return <Navigate to="/" replace={true} />;
  }
};
