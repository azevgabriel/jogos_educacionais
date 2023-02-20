import { ButtonTypes } from '@interfaces/components';
import styled, { css } from 'styled-components';

interface ContainerProps {
  typeOfButton: ButtonTypes;
  width?: string;
  height?: string;
}

const buttonTypes = {
  submit: css`
    background-color: #2ecc71;
    color: #fff;
    &:hover {
      background-color: #27ae60;
    }
  `,
  reset: css`
    background-color: #e74c3c;
    color: #fff;
    &:hover {
      background-color: #c0392b;
    }
  `,
  link: css`
    background-color: transparent;
    color: #3498db;
    &:hover {
      color: #2980b9;
    }
  `,
};

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

  .iconWrapper {
    padding-top: 4px;
  }

  transition: background-color 0.3s;

  ${({ typeOfButton }) => buttonTypes[typeOfButton]}
`;
