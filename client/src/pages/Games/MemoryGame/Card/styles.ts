import styled, { css } from 'styled-components';

interface ContainerProps {
  visible: boolean;
  disabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 180px;
  height: 180px;
  position: relative;
  border-radius: 6px;
  background-color: #fff;
  overflow: hidden;

  transition: all linear 0.3s;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      &:hover {
        opacity: 1;
      }
    `}

  img {
    position: absolute;
  }

  .frontOfCard {
    width: 90%;
    top: 5%;
    left: 5%;
    z-index: 1;
  }

  .backOfCard {
    z-index: 2;
    transition: all linear 0.3s;
    height: 100%;

    ${(props) =>
      props.visible
        ? css`
            opacity: 0;
          `
        : css`
            opacity: 1;
          `}
  }
`;
