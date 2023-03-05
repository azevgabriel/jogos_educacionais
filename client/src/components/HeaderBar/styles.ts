import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
  top: 0;

  width: 100%;
  height: 70px;
  background: #fefefe;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.div`
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

  button + h1 {
    margin-left: 2rem;
  }

  @media (max-width: 600px) and (orientation: portrait) {
    padding-left: 2.5rem;
  }
`;

export const RegisterWrapper = styled.div`
  height: 100%;
  width: 20%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 3rem;

  @media (max-width: 600px) and (orientation: portrait) {
    padding-right: 1.5rem;
  }

  .registerButton {
    p {
      font-size: 1.5rem;
      line-height: 1rem;
      font-weight: 600;
    }
  }
`;
