import styled, { css } from 'styled-components';

interface ContainerProps {
  isCorrect: 'true' | 'false' | 'null';
}

const containerVariations = {
  true: css`
    background-color: #589e4a;
    p {
      color: #fff;
    }
  `,
  false: css`
    background-color: #bb0000;
    p {
      color: #fff;
    }
  `,
  null: css`
    background-color: #fefefe;
    p {
      color: #000;
    }
  `,
};

export const Container = styled.div<ContainerProps>`
  ${(props) => containerVariations[props.isCorrect]}

  transition: all linear 0.4s;
`;
