import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 70vh;
  width: 160vh;

  background-color: rgba(255, 255, 255, 0.8);
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
    width: 97%;
    height: 35%;

    border: 4px solid #aeb0b5;
    border-radius: 10px;

    background-color: #fefefe;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-family: 'Patrick Hand SC', cursive;
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

        p {
          font-size: 7vh;
          font-family: 'Patrick Hand SC', cursive;
          user-select: none;
        }
      }

      .is-dragging {
        cursor: move;
        opacity: 0.3;
      }
    }

    .not-over {
      border: 5px solid #bb0000;
    }

    .over {
      border: 2px solid #589e4a;
    }
  }
`;
