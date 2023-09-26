import styled from 'styled-components';

interface ContainerProps {
  src: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;

  height: 70vh;
  width: 160vh;

  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;

  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);

  content: '';

  .image {
    width: 45%;
    height: 90%;

    background-image: url(${(props) => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: drop-shadow(0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.4));

    a {
      position: absolute;
      bottom: -5%;
      left: 0;
    }
  }

  .content {
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &-title {
      display: inline-block;
      padding: 0.2em 1.5rem;
      border-radius: 3px;
      background-color: #fcbfc6;

      text-align: justify;
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
