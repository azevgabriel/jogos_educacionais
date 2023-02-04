import styled from 'styled-components';

import farmBackground from '../../assets/images/background.jpg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url(${farmBackground});
  background-size: cover;
  background-position: center;

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  background-color: #5b616b;

  .notAvailable{
    width: 45%;
    height: auto;
  }
`;