import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: var(--header-height);
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

export const Button = styled.button`
  width: 60px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 90%;
    height: auto;
  }
`;
