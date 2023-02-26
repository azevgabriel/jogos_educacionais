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
  ariaLabel: string;
  className?: string;
}

export const Button = ({
  width,
  height,
  type,
  text,
  onClick,
  icon,
  ariaLabel,
  className,
}: ButtonProps) => {
  return (
    <Container
      width={width}
      height={height}
      onClick={onClick}
      typeOfButton={type}
      aria-label={ariaLabel}
      className={className}
    >
      {icon ? <div className="iconWrapper">{icon}</div> : null}
      {text ? <p>{text}</p> : null}
    </Container>
  );
};
