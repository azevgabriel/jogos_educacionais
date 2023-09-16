import { CommonBodyBackground } from '@interfaces/components';
import { ReactNode } from 'react';
import { Container } from './styles';

interface CommonBodyProps {
  children: ReactNode;
  background: CommonBodyBackground;
  header?: ReactNode;
}

export const CommonBody = ({
  children,
  background,
  header,
}: CommonBodyProps) => {
  return (
    <Container background={background} isHeader={!!header}>
      {header}
      <div className="scrollable">{children}</div>
    </Container>
  );
};
