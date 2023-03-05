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
  background: #f3f3f3;
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
    }

    button + button {
      margin-top: 1rem;
    }
  }

  @media (max-width: 1200px) and (orientation: landscape) {
    width: 100vw;
    height: 100vh;
    left: calc(50% - 50vw);

    ${({ isVisibility }) =>
      isVisibility &&
      css`
        top: calc(50% - 50vh);
      `}

    border-radius: 0;
  }

  @media (max-width: 600px) and (orientation: portrait) {
    left: calc(50% - 40vw);
    width: 80vw;
    height: 60vh;

    ${({ isVisibility }) =>
      isVisibility &&
      css`
        top: calc(50% - 30vh);
      `}

    img {
      display: none;
    }

    .rightWrapper {
      width: 90%;
    }
  }
`;
