import styled from 'styled-components';

interface ContainerProps {
  numberOfLetters: number;
}

export const Container = styled.div<ContainerProps>`
  height: 70%;
  width: calc(90% / ${(props) => props.numberOfLetters});

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 2px solid #aeb0b5;
  border-radius: 10px;

  .letter {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    font-size: 7vh;
    font-weight: bold;
  }

  .is-dragging {
    cursor: move;
    opacity: 0.3;
  }

  .not-over {
    border: 2px solid #aeb0b5;
  }

  .over {
    border: 2px solid #589e4a;
  }
`;
