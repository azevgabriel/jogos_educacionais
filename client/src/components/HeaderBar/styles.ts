import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  top: 0;

  width: 100%;
  height: 70px;
  background: linear-gradient(90deg, #f5f5f5 0%, #e5e5e5 100%);

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .logoWrapper {
    width: max-content;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 3rem;

    h1 {
      font-size: 2.25rem;
      line-height: 2.5rem;
      margin: 0;
    }
  }

  .contentWrapper {
  }

  .loginWrapper {
    height: 100%;
    width: 20%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    button {
      width: 150px;
      height: 40px;
      font-size: 1.5rem;
      line-height: 1rem;
      font-weight: 600;

      background-color: transparent;
      border: 0;

      transition: all 0.4s;

      &:hover {
        color: #327dc6;
      }
    }
  }
`;
