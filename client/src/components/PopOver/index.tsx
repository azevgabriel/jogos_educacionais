import { ArrowUp } from '@components/utils';
import { ReactNode } from 'react';
import { Container, PopOver } from './styles';

interface PopOverProps {
  children: ReactNode;
  visible: boolean;
  onClose: () => void;
}

export const PopOverWrapper = ({
  children,
  visible,
  onClose,
}: PopOverProps) => {
  return (
    <Container>
      {children}
      <PopOver visible={visible}>
        <ArrowUp />
      </PopOver>
    </Container>
  );
};
