import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  background-color: #5b616b;

  .notAvailable {
    width: 45%;
    height: auto;
  }
`;
