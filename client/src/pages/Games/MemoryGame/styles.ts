import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;

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

export const CardGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  gap: 10px;
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

export const HeaderBarChildren = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;

  button {
    width: 180px;
    font-size: 2rem;

    transition: all linear 0.3s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
