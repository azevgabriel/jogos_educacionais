import styled, { css } from 'styled-components';

interface ContainerProps {
  visible: boolean;
  disabled: boolean;
  sizes: [number, number];
  src: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => `${props.sizes[0]}px`};
  height: ${(props) => `${props.sizes[1]}px`};
  position: relative;
  border-radius: 6px;
  background-color: #fff;
  overflow: hidden;

  transition: opacity linear 0.3s;

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

  .frontOfCard {
    position: absolute;
    z-index: 1;
    top: 2.5%;
    left: 2.5%;
    height: 95%;
    width: 95%;

    background-image: url(${(props) => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .backOfCard {
    position: absolute;
    z-index: 2;
    transition: all linear 0.3s;
    height: 100%;
    width: 100%;
    background: linear-gradient(63deg, #999 23%, transparent 23%) 7px 0,
      linear-gradient(63deg, transparent 74%, #999 78%),
      linear-gradient(
        63deg,
        transparent 34%,
        #999 38%,
        #999 58%,
        transparent 62%
      ),
      #444;
    background-size: 16px 48px;

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
