import { PopOverWrapper } from '@components/PopOver';
import { useState } from 'react';
import { Container } from './styles';

export const HeaderBar = () => {
  const [popOverVisible, setPopOverVisible] = useState(false);

  const handlePopOver = () => {
    setPopOverVisible(!popOverVisible);
  };

  return (
    <Container>
      <div className="logoWrapper">
        <h1>Jogos Inclusivos</h1>
      </div>
      <div className="contentWrapper"></div>
      <div className="loginWrapper">
        <PopOverWrapper
          visible={popOverVisible}
          onClose={() => setPopOverVisible(false)}
        >
          <button onClick={handlePopOver}>Cadastrar</button>
        </PopOverWrapper>
      </div>
    </Container>
  );
};
