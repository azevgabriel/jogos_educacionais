import styled from 'styled-components';

import menuBackground from '../../assets/images/background_menu.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url(${menuBackground});
  background-size: cover;
  background-position: center;

  display: flex;

  flex-wrap: wrap;

  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  overflow: hidden;
`;
