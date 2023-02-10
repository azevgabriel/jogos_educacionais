import styled from 'styled-components';

interface ContainerProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid ${(props) => props.color};

  position: absolute;
  top: -15px;
  left: calc(50% - 15px);
`;
