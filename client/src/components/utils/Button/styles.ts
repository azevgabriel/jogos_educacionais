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
    transition: background-color 0.3s;
  `,
  reset: css`
    background-color: #e74c3c;
    color: #fff;
    &:hover {
      background-color: #c0392b;
    }
    transition: background-color 0.3s;
  `,
  link: css`
    background-color: transparent;
    color: var(--primary-color);
    &:hover {
      color: var(--primary-color);
    }
    p {
      font-family: 'Patrick Hand SC', cursive;
      font-size: 1.3rem;
      line-height: 1.2rem;
    }
    .iconWrapper + p {
      padding-left: 0.2rem;
    }
    &:hover {
      filter: brightness(0.9);
    }
    transition: filter 0.3s;
  `,
  default: css`
    border-radius: 8px;
    background-color: #f5f5f5;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.5);

    p {
      font-family: cursive;
      font-size: 1.2rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
    transition: filter 0.3s;
  `,
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width ?? '100px'};
  height: ${({ height }) => height ?? 'max-content'};
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

  .iconWrapper + p {
    padding-left: 0.1rem;
  }

  ${({ typeOfButton }) => buttonTypes[typeOfButton]}
`;
