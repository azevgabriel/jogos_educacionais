import { BsFillGearFill, ImExit } from '@components/Icons';
import { PopOverWrapper } from '@components/PopOver';
import { Button, Switch } from '@components/utils';
import { useConfig } from '@hooks/useConfig';
import { useState } from 'react';
import { AcessibilitySwitch, LoggedWrapper, Row } from './styles';

export const Session = () => {
  const { user, unsetUser, getLibras, setLibras } = useConfig();
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
              <AcessibilitySwitch>
                <h3>Acessibilidade</h3>
                <Row>
                  <span>Libras</span>
                  <Switch
                    checked={getLibras()}
                    setChecked={setLibras}
                    rounded={true}
                    height={18}
                  />
                </Row>
              </AcessibilitySwitch>
              <Button
                type="link"
                text="Sair"
                icon={<ImExit size={18} />}
                onClick={unsetUser}
                ariaLabel="Encerrar sessão"
              />
            </>
          ),
          height: '100%',
          alignVertical: 'space-between',
          alignHorizontal: 'center',
        }}
        container={{
          sizes: {
            width: 140,
            height: 100,
          },
        }}
      >
        <Button
          type="link"
          onClick={handlePopOver}
          icon={<BsFillGearFill size={25} />}
          ariaLabel="Abrir menu de configurações"
        />
      </PopOverWrapper>
    </LoggedWrapper>
  );
};
