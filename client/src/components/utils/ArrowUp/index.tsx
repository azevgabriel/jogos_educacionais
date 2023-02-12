import { Container } from './styles';

interface ArrowUpProps {
  color?: string;
}

export const ArrowUp = ({ color }: ArrowUpProps) => {
  return <Container color={color ?? '#ccc'} />;
};
