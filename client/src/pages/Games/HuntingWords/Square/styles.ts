import styled, { css } from 'styled-components';

interface ContainerProps {
  selected: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #fff;

  border: 0;

  span {
    font-size: 2rem;
    line-height: 2.5rem;
    font-family: cursive;
    user-select: none;
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: #aeb0b5;
    `}
`;
