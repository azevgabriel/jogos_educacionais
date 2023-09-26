import styled, { css } from 'styled-components';

interface BackgroundProps {
  isVisibility: boolean;
}

export const Background = styled.div<BackgroundProps>`
  position: fixed;
  top: -100vh;
  width: 100vw;
  height: 100vh;

  transition: all 0.3s;
  background-color: rgba(0, 0, 0, 0.1);

  ${({ isVisibility }) =>
    isVisibility &&
    css`
      top: 0;
    `}

  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 1000px;
  height: 90%;
  background: #f3f3f3;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  transition: all 0.3s;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header {
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 2.5rem;
      line-height: 3rem;
      text-align: center;
    }

    img {
      height: 60%;
      margin-right: 1rem;
    }
  }

  .body {
    width: 90%;
    height: 70%;

    h2 {
      margin: 0.2rem 0;
    }

    p {
      font-size: 1.2rem;
    }

    ul {
      font-size: 1.2rem;
      margin-left: 2.5rem;
    }
  }

  .footer {
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1200px) and (orientation: landscape) {
    width: 100vw;
    height: 100vh;
  }

  @media (max-width: 600px) and (orientation: portrait) {
    width: 80vw;
    height: 60vh;

    img {
      display: none;
    }

    .rightWrapper {
      width: 90%;
    }
  }
`;
