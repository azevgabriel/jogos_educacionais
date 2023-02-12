import { ArrowUp } from '@components/utils';
import {
  PopOverBodyProps,
  PopOverFooterProps,
  PopOverHeaderProps,
} from '@interfaces/components';
import { ReactNode, useEffect, useState } from 'react';
import { Body, Container, Footer, Header, PopOver } from './styles';

interface PopOverProps {
  children: ReactNode;
  visible: boolean;
  header?: PopOverHeaderProps;
  body: PopOverBodyProps;
  footer?: PopOverFooterProps;
}

export const PopOverWrapper = ({
  children,
  visible,
  header,
  body,
  footer,
}: PopOverProps) => {
  const [firstVisible, setFirstVisible] = useState(true);

  useEffect(() => {
    if (firstVisible && visible) {
      setFirstVisible(false);
    }
  }, [firstVisible, visible]);

  return (
    <Container>
      {children}
      <PopOver visible={visible} firstRender={firstVisible}>
        <ArrowUp />
        {header?.children ? (
          <Header height={header?.height}>{header?.children}</Header>
        ) : null}
        <Body height={body?.height}>{body.children}</Body>
        {footer?.children ? (
          <Footer height={footer?.height}>{footer?.children}</Footer>
        ) : null}
      </PopOver>
    </Container>
  );
};
