import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface StyledLinkProps {
  available: boolean;
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 400px;
  height: 350px;

  border-radius: 6px;
  background-color: #fdfdfd;

  margin: 30px;

  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);

  transition: all 0.4s;

  &:hover {
    filter: brightness(0.95);
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

  @media (max-width: 500px) and (orientation: portrait) {
    height: 200px;
    margin: 10px 15px;
  }
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

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
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
    margin: 0;
    margin-bottom: 8px;
    color: #000;
  }

  p {
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.1rem;
    line-height: 1.5rem;
    font-weight: bold;
    margin: 0;
    font-family: cursive;
  }

  @media (max-width: 500px) and (orientation: portrait) {
    justify-content: center;
    p {
      display: none;
    }
  }
`;
