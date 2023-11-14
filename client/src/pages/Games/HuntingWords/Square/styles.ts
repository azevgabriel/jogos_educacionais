import styled, { css } from 'styled-components';

interface ContainerProps {
  selected: boolean;
  correct?: string;
  diagonalBorder?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background-color: #fff;
  margin: 2px;

  border: 0;

  span {
    font-size: 1.7rem;
    line-height: 2rem;
    font-family: cursive;
    user-select: none;
  }

  ${({ diagonalBorder }) =>
    diagonalBorder &&
    css`
      border-radius: ${diagonalBorder};
    `}
  ${({ correct }) =>
    correct &&
    css`
      background-color: ${correct};
    `}
    ${(props) =>
    props.selected &&
    css`
      background-color: #aeb0b5;
    `};
`;
