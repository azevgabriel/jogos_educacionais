import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 70vh;
  width: 160vh;

  background-color: #e4e2e0;
  border-radius: 10px;

  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);

  content: '';
`;

export const ImageWrapper = styled.div`
  height: 70vh;
  width: 70vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 70%;
    width: 70%;

    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 1));
  }
`;

interface LessonLettersContentWrapperProps {
  numberOfLetters: number;
}

export const LessonLettersContentWrapper = styled.div<LessonLettersContentWrapperProps>`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;

  height: 70vh;
  width: 80vh;

  .nameContent {
    width: 100%;
    height: 30%;

    border: 4px solid #aeb0b5;
    border-radius: 10px;

    background-color: #dce4ef;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 13vh;
      letter-spacing: 0.5vh;
      line-height: 13.5vh;
    }
  }

  .modelContent {
    width: 100%;
    height: 30%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    .house {
      height: 70%;
      width: calc(90% / ${(props) => props.numberOfLetters});

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      border: 2px solid #aeb0b5;
      border-radius: 10px;

      span {
        font-size: 10vh;
      }
    }
  }

  .emptyContent {
    width: 100%;
    height: 30%;
  }
`;
