import {
  PopOverBodyProps,
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
}

export const PopOver = styled.div<PopOverProps>`
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  position: absolute;
  top: 50px;
  left: calc(50% - 100px);

  width: 200px;
  height: 220px;

  background: #fefefe;
  border: 2px solid #ccc;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.4);
  border-radius: 10px;

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
    props.firstRender &&
    css`
      visibility: hidden;
    `}

  ${(props) =>
    props.visible
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
  height: ${(props) => (props.height ? props.height : '20%')};
  display: flex;
  flex-direction: row;
`;

export const Body = styled.div<Omit<PopOverBodyProps, 'children'>>`
  width: 100%;
  height: ${(props) => (props.height ? props.height : '60%')};
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.div<Omit<PopOverFooterProps, 'children'>>`
  width: 100%;
  height: ${(props) => (props.height ? props.height : '20%')};
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
  align-items: center;
`;
