import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface StyledLinkProps {
  available: boolean;
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 370px;
  height: 320px;

  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);

  margin: 20px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);

  transition: all 0.3s;

  &:hover {
    filter: brightness(0.9);
  }

  ${(props) =>
    !props.available &&
    `
    filter: brightness(0.7);
    cursor: not-allowed;
    &:hover {
      filter: brightness(0.7);
    }
  `}
`;

interface ImageWrapperStyleProps {
  source: string;
}

export const ImageWrapper = styled.div<ImageWrapperStyleProps>`
  width: 100%;
  height: 60%;

  background-image: url(${(props) => props.source});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #abdbe3;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ContentGame = styled.div`
  width: calc(100% - 30px);
  height: calc(40% - 30px);

  display: flex;
  flex-direction: column;

  padding: 15px;


  h2 {
    font-size: 1.8rem;
    line-height: 1.6rem;
    font-family: 'Patrick Hand SC', cursive;
    margin: 0;
    margin-bottom: 8px;
    color: #000
  }

  p {
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.1rem;
    line-height: 1.2rem;
    font-weight: bold;
    margin: 0;
     font-family: cursive;
  }
`;
