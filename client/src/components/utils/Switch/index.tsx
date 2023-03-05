import { Checkbox, Slider, SwitchContainer } from './styles';

interface SwitchProps {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  rounded?: boolean;
  height?: number;
}

export const Switch = ({
  checked,
  setChecked,
  rounded,
  height,
}: SwitchProps) => {
  return (
    <SwitchContainer height={height}>
      <Checkbox
        height={height}
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <Slider rounded={rounded} height={height} className="switch-slider" />
    </SwitchContainer>
  );
};
