import { ButtonTypes } from '@interfaces/components';
import { Container } from './styles';

interface ButtonProps {
  width?: string;
  height?: string;
  type: ButtonTypes;
  text: string;
  onClick: () => void;
}

export const Button = ({ width, height, type, text, onClick }: ButtonProps) => {
  return (
    <Container width={width} height={height} type={type} onClick={onClick}>
      <p>{text}</p>
    </Container>
  );
};
