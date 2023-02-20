import {
  PopOverBodyProps,
  PopOverContainerProps,
  PopOverFooterProps,
  PopOverHeaderProps,
} from '@interfaces/components';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: max-content;
  height: max-content;
  position: relative;
`;

interface PopOverProps {
  visible: boolean;
  firstRender: boolean;
  colors?: PopOverContainerProps['colors'];
  sizes?: PopOverContainerProps['sizes'];
}

export const PopOver = styled.div<PopOverProps>`
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  position: absolute;
  top: 50px;
  left: ${(props) =>
    props?.sizes?.width
      ? css`calc(50% - ${props?.sizes?.width / 2}px)`
      : css`calc(50% - 100px)`};

  width: ${(props) =>
    props?.sizes?.width ? `${props?.sizes?.width}px` : '200px'};
  height: ${(props) =>
    props?.sizes?.height ? `${props?.sizes?.height}px` : '220px'};

  background: ${(props) =>
    props?.colors?.background ? props?.colors.background : '#fefefe'};
  border: ${(props) =>
      props?.sizes?.borderWidht ? `${props?.sizes?.borderWidht}px` : '1px'}
    solid
    ${(props) =>
      props?.colors?.borderColor ? props?.colors.borderColor : '#e0e0e0'};

  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.4);
  border-radius: ${(props) =>
    props?.sizes?.borderRadius ? `${props?.sizes?.borderRadius}px` : '5px'};

  z-index: 10;

  @keyframes deslocateAndFade {
    0% {
      opacity: 0;
      transform: translateY(-5px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes deslocateAndFadeReverse {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateY(-5px);
      visibility: hidden;
    }
  }

  ${(props) =>
    props?.firstRender &&
    css`
      visibility: hidden;
    `}

  ${(props) =>
    props?.visible
      ? css`
          animation: deslocateAndFade 0.3s ease-in-out;
          visibility: visible;
          animation-fill-mode: forwards;
        `
      : css`
          animation: deslocateAndFadeReverse 0.3s ease-in-out;
          animation-fill-mode: forwards;
        `};
`;

export const Header = styled.div<Omit<PopOverHeaderProps, 'children'>>`
  width: 100%;
  height: ${(props) => (props?.height ? props?.height : '20%')};
  display: flex;
  flex-direction: row;

  align-items: ${(props) =>
    props?.alignVertical ? props?.alignVertical : 'flex-start'};
  justify-content: ${(props) =>
    props?.alignHorizontal ? props?.alignHorizontal : 'flex-start'};
`;

export const Body = styled.div<Omit<PopOverBodyProps, 'children'>>`
  width: 100%;
  height: ${(props) => (props?.height ? props?.height : '60%')};
  display: flex;
  flex-direction: column;

  justify-content: ${(props) =>
    props?.alignVertical ? props?.alignVertical : 'flex-start'};
  align-items: ${(props) =>
    props?.alignHorizontal ? props?.alignHorizontal : 'flex-start'};
`;

export const Footer = styled.div<Omit<PopOverFooterProps, 'children'>>`
  width: 100%;
  height: ${(props) => (props?.height ? props?.height : '20%')};
  display: flex;
  flex-direction: row;

  align-items: ${(props) =>
    props?.alignVertical ? props?.alignVertical : 'flex-start'};
  justify-content: ${(props) =>
    props?.alignHorizontal ? props?.alignHorizontal : 'flex-start'};
`;
