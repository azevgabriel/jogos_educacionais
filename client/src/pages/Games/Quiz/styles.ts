import styled from 'styled-components';

interface ContainerProps {
  src: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;

  height: 70vh;
  width: 160vh;

  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;

  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);

  content: '';

  .image {
    width: 60%;
    height: 100%;
    border-radius: 10px;

    background-image: url(${(props) => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .content {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &-title {
      display: inline-block;
      padding: 0 0.25em;
      border-radius: 3px;
      background-color: #fcbfc6;
    }

    &-options {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const ScoreWrapper = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 90%;

    &-title {
      width: 100%;
      height: 40%;

      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
    }

    &-score {
      width: 100%;
      height: 60%;
      display: flex;
      flex-direction: row;

      justify-content: space-evenly;
      align-items: center;

      span {
        font-size: 1.5rem;
      }
    }
  }
`;

export const Button = styled.button`
  background: transparent;
  margin: 0.75rem 0 0;
  height: 3rem;
  width: 20rem;
  background: #fafafa;
  box-shadow: 0.1rem 0.1rem 0.5rem -0.1rem;

  position: relative;

  transition: all linear 0.3s;

  &:hover {
    transform: scale(1.1);
    background: #7f4788;

    p {
      color: #fff;
    }
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    color: #000;
  }

  .alternative {
    position: absolute;
    left: 1rem;
  }

  @media (max-width: 996px) {
    width: calc(100% - 4rem);
  }
`;
