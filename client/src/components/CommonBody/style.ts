import styled, { css } from 'styled-components';

import farmBackground from '@assets/images/background.jpg';
import menuBackground from '@assets/images/background_menu.png';
import { CommonBodyBackground } from '@interfaces/components';

interface ContainerProps {
  background: CommonBodyBackground;
}

const backgroundTypes = {
  menu: css`
    background-image: url(${menuBackground});
  `,
  farm: css`
    background-image: url(${farmBackground});
  `,
};

export const Container = styled.main<ContainerProps>`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;

  ${(props) => backgroundTypes[props.background]}

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
