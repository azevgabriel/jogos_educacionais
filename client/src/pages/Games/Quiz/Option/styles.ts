import styled, { css } from 'styled-components';

interface ButtonProps {
  clicked: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: transparent;
  padding: 0.5rem 2rem;
  width: 100%;
  background: #fafafa;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

  position: relative;

  transition: all linear 0.3s;

  & + button {
    margin-top: 1rem;
  }

  &:hover {
    transform: scale(1.02);
    background: var(--primary-color);

    p {
      color: #fff;
    }
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    color: #000;
    letter-spacing: 0.05rem;
  }

  .alternative {
    position: absolute;
    left: 1rem;
  }

  ${({ clicked }) =>
    clicked &&
    css`
      background: #e93e36;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
      p {
        color: #fff;
      }
      &:hover {
        transform: scale(1);
        background: #e93e36;

        p {
          color: #fff;
        }
      }
    `}
`;
