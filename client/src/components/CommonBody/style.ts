import styled from 'styled-components';

import menuBackground from '@assets/images/background_menu.png';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;

  background-image: url(${menuBackground});
  background-size: cover;
  background-position: center;

  .scrollable {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);

    overflow-y: auto;

    display: flex;

    flex-wrap: wrap;

    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;
