import { CommonBody } from '@components/CommonBody';
import { HeaderBar } from '@components/HeaderBar';
import { Square } from './Square';

export const HuntingWords = () => {
  return (
    <CommonBody
      background="adventureTime"
      header={
        <HeaderBar
          title={{
            complete: 'Caça Palavras',
            resume: '',
          }}
          children={<></>}
        />
      }
    >
      <Square />
      <Square />
    </CommonBody>
  );
};
