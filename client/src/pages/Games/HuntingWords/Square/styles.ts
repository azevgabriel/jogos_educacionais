import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #fff;

  border: 0;

  span {
    height: max-content;
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;
