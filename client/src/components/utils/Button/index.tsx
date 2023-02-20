import { ButtonTypes } from '@interfaces/components';
import { ReactNode } from 'react';
import { Container } from './styles';

interface ButtonProps {
  width?: string;
  height?: string;
  type: ButtonTypes;
  text?: string;
  icon?: ReactNode;
  onClick: () => void;
}

export const Button = ({
  width,
  height,
  type,
  text,
  onClick,
  icon,
}: ButtonProps) => {
  return (
    <Container
      width={width}
      height={height}
      onClick={onClick}
      typeOfButton={type}
    >
      {icon ? <div className="iconWrapper">{icon}</div> : null}
      {text ? <p>{text}</p> : null}
    </Container>
  );
};
