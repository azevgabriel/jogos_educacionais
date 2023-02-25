import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 70vh;
  width: 160vh;

  @media (max-width: 1000px) and (orientation: portrait) {
    width: 90vw;
    height: 70vh;
    align-items: center;
    padding: 0 2.5vw;
  }

  @media (max-width: 1200px) and (orientation: landscape) {
    height: 70vh;
    width: 70vw;
    padding: 0 2.5vw;
    align-items: center;
  }

  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;

  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);

  content: '';
`;

export const ImageWrapper = styled.div`
  height: 55vh;
  width: 55vh;
  margin-top: 7.5vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 70%;
    width: auto;
  }

  @media (max-width: 1000px) and (orientation: portrait) {
    display: none;
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
  width: 102.5vh;

  .nameContent {
    width: 97%;
    height: 35%;

    border: 2px solid #aeb0b5;
    border-radius: 10px;

    background-color: #fefefe;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 16vh;
      letter-spacing: 0.75vh;
      line-height: 13.5vh;
      user-select: none;
    }
  }

  .line {
    width: 100%;
    height: 25%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    .initialFullHouse {
      background-color: #fefefe;
    }

    .dropzone {
      height: 70%;
      width: calc(90% / ${(props) => props.numberOfLetters});

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      border: 2px solid #aeb0b5;
      border-radius: 10px;

      .letter {
        width: max-content;
        height: max-content;

        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        cursor: move;

        img {
          height: 9vh;
        }

        p {
          font-size: 7vh;
          user-select: none;
        }
      }

      .is-dragging {
        cursor: move;
        opacity: 0.3;
      }
    }

    .not-over {
      border: 2px solid #bb0000;
    }

    .over {
      border: 2px solid #589e4a;
    }
  }
`;
