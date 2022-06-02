import styled, { css } from 'styled-components';

interface IContainer {
  isVisibility: boolean;
}

export const Container = styled.div<IContainer>`
  position: fixed;
  top: -100%;
  left: calc(50% - 350px);
  width: 700px;
  height: 400px;
  background-color: rgb(253, 255, 239);
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
    height: 80%;
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
      text-align: center;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }

    button {
      width: 80%;
      height: 4rem;
      border-radius: 10px;
      background-color: #f5f5f5;
      border: none;
      font-size: 1.2rem;
      margin-bottom: 1rem;

      box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.5);
      transition: all 0.3s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
