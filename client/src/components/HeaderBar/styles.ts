import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  top: 0;

  width: 100%;
  height: 70px;
  background: #fefefe;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .contentWrapper {
  }
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
`;

export const RegisterWrapper = styled.div`
  height: 100%;
  width: 20%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 3rem;

  .registerButton {
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
`;
