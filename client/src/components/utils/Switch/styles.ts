import styled, { css } from 'styled-components';

interface SwitchContainer {
  height?: number;
}

export const SwitchContainer = styled.label<SwitchContainer>`
  position: relative;
  display: inline-block;
  width: ${(props) =>
    props.height ? Math.round((props.height * 60) / 34) : 60}px;
  height: ${(props) => props.height || 34}px;
  margin: 0 0.5rem;
`;

interface CheckboxProps {
  height?: number;
}

export const Checkbox = styled.input<CheckboxProps>`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .switch-slider {
    background-color: var(--primary-color);
  }

  &:focus + .switch-slider {
    box-shadow: 0 0 1px var(--primary-color);
  }

  &:checked + .switch-slider:before {
    -webkit-transform: translateX(
      ${(props) => (props.height ? Math.round((props.height * 26) / 34) : 26)}px
    );
    -ms-transform: translateX(
      ${(props) => (props.height ? Math.round((props.height * 26) / 34) : 26)}px
    );
    transform: translateX(
      ${(props) => (props.height ? Math.round((props.height * 26) / 34) : 26)}px
    );
  }
`;

interface SliderProps {
  rounded?: boolean;
  height?: number;
}

export const Slider = styled.span<SliderProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: ${(props) =>
      props.height ? Math.round((props.height * 26) / 34) : 26}px;
    width: ${(props) =>
      props.height ? Math.round((props.height * 26) / 34) : 26}px;
    left: ${(props) => (props.height ? Math.floor(props.height / 9) : 4)}px;
    bottom: ${(props) => (props.height ? Math.floor(props.height / 9) : 4)}px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  ${(props) =>
    props.rounded &&
    css`
      border-radius: ${props?.height ?? 34}px;
      &:before {
        border-radius: 50%;
      }
    `}
`;
