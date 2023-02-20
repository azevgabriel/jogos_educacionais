import { ArrowUp } from '@components/utils';
import {
  PopOverBodyProps,
  PopOverContainerProps,
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
  container?: PopOverContainerProps;
}

export const PopOverWrapper = ({
  children,
  visible,
  header,
  body,
  footer,
  container,
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
      <PopOver
        visible={visible}
        firstRender={firstVisible}
        colors={container?.colors}
        sizes={container?.sizes}
      >
        <ArrowUp />
        {header?.children ? (
          <Header
            height={header?.height}
            alignHorizontal={header?.alignHorizontal}
            alignVertical={header?.alignVertical}
          >
            {header?.children}
          </Header>
        ) : null}
        <Body
          height={body?.height}
          alignHorizontal={body?.alignHorizontal}
          alignVertical={body?.alignVertical}
        >
          {body.children}
        </Body>
        {footer?.children ? (
          <Footer
            height={footer?.height}
            alignHorizontal={footer?.alignHorizontal}
            alignVertical={footer?.alignVertical}
          >
            {footer?.children}
          </Footer>
        ) : null}
      </PopOver>
    </Container>
  );
};
