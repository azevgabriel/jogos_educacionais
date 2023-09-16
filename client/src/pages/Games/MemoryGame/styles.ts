import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  .topo {
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: space-between;
  }

  button {
    background: var(--color-purple);
    width: 100px;
    border: 2px solid var(--color-white);
    padding: 6px 12px;
    border-radius: 4px;
    color: var(--color-white);
    letter-spacing: 0.8px;
    font-weight: bold;
    cursor: pointer;
    font-size: 1em;

    &:hover {
      filter: brightness(78%);
    }
  }
  p {
    background: var(--color-blue-dark);
    width: 120px;
    border: 2px solid var(--color-white);
    padding: 6px 12px;
    border-radius: 4px;
    color: var(--color-white);
    letter-spacing: 0.8px;
    font-weight: bold;
    font-size: 1em;
  }
`;

export const CardGrid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
`;
