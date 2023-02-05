import styled, { css } from 'styled-components';

interface IContainer {
  isVisibility: boolean;
}

export const Container = styled.div<IContainer>`
  position: fixed;
  top: -200%;
  left: calc(50% - 350px);
  width: 700px;
  height: 400px;
  background-color: rgb(249, 253, 223);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 10;

  transition: all 0.3s;

  ${({ isVisibility }) =>
    isVisibility &&
    css`
      top: calc(50% - 200px);
    `}

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: auto;
    height: 70%;
  }

  .rightWrapper {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 2.5rem;
      line-height: 3.5rem;
      text-align: center;
      margin: 0;
      margin-bottom: 2rem;
      font-family: 'Patrick Hand SC', cursive;
    }

    button {
      width: 80%;
      height: 3.5rem;
      border-radius: 10px;
      background-color: #f5f5f5;
      border: none;
      margin-bottom: 1rem;

      box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.5);
      transition: all 0.3s;

      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-family: cursive;
        font-size: 1.2rem;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
