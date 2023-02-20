import styled, { css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: flex-start;
  padding-bottom: 2%;
`;

interface RowProps {
  error?: boolean;
}

export const Row = styled.div<RowProps>`
  display: flex;
  width: 90%;
  height: max-content;
  margin-bottom: 2px;

  display: flex;
  flex-direction: column;

  label {
    font-size: 1.2rem;
    font-weight: 600;
    padding-bottom: 2px;
  }

  input {
    height: 20px;
    padding: 2px 5px;
  }

  select {
    height: 30px;
  }

  select,
  input {
    font-size: 0.8rem;
    font-family: cursive;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  ${(props) =>
    props.error &&
    css`
      input,
      select {
        border: 1px solid red;
      }
    `}

  transition: border 0.4s;
`;
