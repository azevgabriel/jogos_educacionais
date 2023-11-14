import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 15px 20px;

  h2 {
    margin: auto 0;
  }

  b {
    letter-spacing: 0.5rem;
  }
`;
