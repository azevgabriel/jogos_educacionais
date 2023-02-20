import styled from 'styled-components';

export const LoggedWrapper = styled.div`
  height: 100%;
  width: 30%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 3rem;

  align-items: center;
`;

export const AcessibilitySwitch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  border-bottom: 1px solid #e0e0e0;

  h3 {
    margin: 0;
    margin-bottom: 0.5rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  padding-bottom: 0.5rem;
  align-items: center;

  span {
    font-size: 1.05rem;
    margin-right: auto;
    padding-left: 0.5rem;
  }
`;
