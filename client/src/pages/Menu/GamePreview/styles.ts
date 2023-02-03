import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 250px;

  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);

  margin: 20px;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);

  transition: all 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;

interface ImageWrapperStyleProps {
  source: string;
}

export const ImageWrapper = styled.div<ImageWrapperStyleProps>`
  width: 100%;
  height: 60%;

  background-image: url(${(props) => props.source});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #abdbe3;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ContentGame = styled.div`
  width: calc(100% - 20px);
  height: calc(40% - 20px);

  display: flex;
  flex-direction: column;

  padding: 10px;

  border-top: 1px solid rgba(0, 0, 0, 0.4);

  h2 {
    font-size: 1.5rem;
    line-height: 1.6rem;
    margin: 0;
  }

  p {
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.1rem;
    line-height: 1.2rem;
    font-weight: bold;
    margin: 0;
  }
`;
