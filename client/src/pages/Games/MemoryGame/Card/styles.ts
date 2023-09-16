import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div<{ flipped: boolean }>`
  img {
    width: 93%;
    height: 90px;
    margin-top: 0;
    display: block;
    border: 2px solid #ffffff;
    border-radius: 6px;
    background-color: var(--color-white);

    &.cardFront {
      ${(props) =>
        props.flipped
          ? css`
              transform: rotateY(0deg);
              transition: all ease-in 0.2s;
              position: absolute;
            `
          : css`
              transform: rotateY(90deg);
              transition-delay: 0.2s;
              position: absolute;
            `}
    }

    &.cardBack {
      ${(props) =>
        props.flipped
          ? css`
              transform: rotateY(90deg);
              transition-delay: 0s;
            `
          : css`
              transition: all ease-in 0.2s;
              transition-delay: 0.2s;
            `}
    }
  }
`;
