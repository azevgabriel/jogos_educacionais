import { HeaderBar } from '@components/HeaderBar';
import { CommonBodyBackground } from '@interfaces/components';
import { ReactNode } from 'react';
import { Container } from './styles';

interface CommonBodyProps {
  children: ReactNode;
  background: CommonBodyBackground;
  isHeader: boolean;
}

export const CommonBody = ({
  children,
  background,
  isHeader,
}: CommonBodyProps) => {
  return (
    <Container background={background} isHeader={isHeader}>
      {isHeader ? <HeaderBar /> : null}
      <div className="scrollable">{children}</div>
    </Container>
  );
};
