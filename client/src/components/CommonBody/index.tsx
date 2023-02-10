import { ReactNode } from 'react';
import { Container } from './style';

interface CommonBodyProps {
  children: ReactNode;
}

export const CommonBody = ({ children }: CommonBodyProps) => {
  return (
    <Container>
      <div className="scrollable">{children}</div>
    </Container>
  );
};
