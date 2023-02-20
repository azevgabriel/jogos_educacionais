import { BsFillGearFill } from '@components/Icons';
import { PopOverWrapper } from '@components/PopOver';
import { Button } from '@components/utils';
import { useConfig } from '@hooks/useConfig';
import { useState } from 'react';
import { LoggedWrapper } from './styles';

export const Session = () => {
  const { user, unsetUser } = useConfig();
  const [popOverVisible, setPopOverVisible] = useState(false);

  if (!user) return null;

  const handlePopOver = () => {
    setPopOverVisible(!popOverVisible);
  };

  return (
    <LoggedWrapper>
      <h2>Olá, {user.name}</h2>
      <PopOverWrapper
        visible={popOverVisible}
        body={{
          children: (
            <>
              <Button type="link" text="Sair" onClick={unsetUser} />
            </>
          ),
          height: '100%',
          alignVertical: 'flex-start',
          alignHorizontal: 'center',
        }}
        container={{
          sizes: {
            width: 120,
            height: 40,
          },
        }}
      >
        <Button
          type="link"
          onClick={handlePopOver}
          icon={<BsFillGearFill size={20} />}
        />
      </PopOverWrapper>
    </LoggedWrapper>
  );
};
