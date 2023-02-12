import { ButtonTypes } from '@interfaces/components';
import styled, { css } from 'styled-components';

interface ContainerProps {
  type: ButtonTypes;
  width?: string;
  height?: string;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width ?? '100px'};
  height: ${({ height }) => height ?? '40px'};
  border-radius: 4px;
  background-color: #3498db;

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0;
    font-weight: 500;
    font-family: cursive;
  }

  ${({ type }) =>
    type === 'submit' &&
    css`
      background-color: #2ecc71;
      color: #fff;
    `}
  ${({ type }) =>
    type === 'reset' &&
    css`
      background-color: #e74c3c;
      color: #fff;
    `}

    transition: background-color 0.3s;

  &:hover {
    ${({ type }) =>
      type === 'submit' &&
      css`
        background-color: #27ae60;
      `}
    ${({ type }) =>
      type === 'reset' &&
      css`
        background-color: #c0392b;
      `}
  }
`;
