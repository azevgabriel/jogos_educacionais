import styled from 'styled-components';

export const Container = styled.div`
  width: max-content;
  height: max-content;
  position: relative;
`;

interface PopOverProps {
  visible: boolean;
}

export const PopOver = styled.div<PopOverProps>`
  position: absolute;
  top: 50px;
  left: calc(50% - 100px);

  width: 200px;
  height: 200px;

  background-color: #fefefe;
  border-radius: 10px;

  z-index: 10;

  @keyframes deslocateAndFade {
    0% {
      opacity: 0;
      transform: translateY(-5px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  animation: deslocateAndFade 0.4s ease-in-out;

  display: ${(props) => (props.visible ? 'flex' : 'none')};
`;
