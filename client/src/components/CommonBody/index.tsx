import { CommonBodyBackground } from '@interfaces/components';
import { ReactNode } from 'react';
import { Container } from './style';

interface CommonBodyProps {
  children: ReactNode;
  background: CommonBodyBackground;
}

export const CommonBody = ({ children, background }: CommonBodyProps) => {
  return (
    <Container background={background}>
      <div className="scrollable">{children}</div>
    </Container>
  );
};
