import { LessonOneWrapper } from '../../components/LessonOneWrapper';
import { useLessonOne } from '../../hooks/UseLessonOne';
import { Container } from './styles';

interface LessonOneProps {}
export const LessonOne = ({}: LessonOneProps) => {
  const { animal } = useLessonOne();

  return <LessonOneWrapper animal={animal} />;
};
