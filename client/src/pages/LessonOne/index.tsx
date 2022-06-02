import { LessonOneWrapper } from '../../components/LessonOneWrapper';
import { useLessonOne } from '../../hooks/UseLessonOne';

interface LessonOneProps {}
export const LessonOne = ({}: LessonOneProps) => {
  const { animal } = useLessonOne();

  return <LessonOneWrapper animal={animal} />;
};
