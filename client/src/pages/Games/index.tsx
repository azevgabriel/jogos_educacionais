import { Navigate, useParams } from 'react-router-dom';

import librasPng from '@assets/images/libras.png';
import notAvailable from '@assets/images/notAvailable.png';
import { CommonBody } from '@components/CommonBody';
import { HeaderBar } from '@components/HeaderBar';
import { HeaderBarButton } from '@components/HeaderBar/styles';
import { IoContrastOutline } from '@components/Icons';
import { useConfig } from '@hooks/useConfig';
import { useLessonOne } from '@hooks/useLessonOne';
import { EventTypes } from '@interfaces/device';
import { checkDevice } from '@utils/device';
import { useEffect, useState } from 'react';
import { LessonOneWrapper } from './LessonOneWrapper';
import MemoryGame from './MemoryGame';
import { Container } from './styles';

export const Game = () => {
  const { animal } = useLessonOne();
  const { getLibras, setLibras } = useConfig();
  const { nome } = useParams();

  const [typeOfEvent, setTypeOfEvent] = useState<EventTypes | undefined>(
    undefined
  );

  useEffect(() => {
    setTypeOfEvent(checkDevice());
  }, [navigator.userAgent]);

  if (!typeOfEvent) return null;

  switch (nome) {
    case 'letras':
      return (
        <Container>
          <CommonBody
            header={
              <HeaderBar
                title={{
                  complete: 'Jogo das Letras',
                  resume: '',
                }}
                children={
                  <>
                    <HeaderBarButton
                      onClick={() => {
                        const libras = getLibras();
                        setLibras(!libras);
                      }}
                    >
                      <img
                        src={librasPng}
                        alt="Ícone com duas mãos dizendo em libras: Libras. Clique para ativar ou desativar a visualização em libras."
                      />
                    </HeaderBarButton>
                    <HeaderBarButton
                      onClick={() => {
                        const libras = getLibras();
                        setLibras(!libras);
                      }}
                    >
                      <IoContrastOutline />
                    </HeaderBarButton>
                  </>
                }
              />
            }
            background="farm"
          >
            <LessonOneWrapper animal={animal} typeOfEvent={typeOfEvent} />
          </CommonBody>
        </Container>
      );
    case 'ligar':
      return (
        <Container>
          <img className="notAvailable" src={notAvailable} />
        </Container>
      );
    case 'silabas':
      return (
        <Container>
          <img className="notAvailable" src={notAvailable} />
        </Container>
      );
    case 'memoria':
      return (
        <Container>
          <MemoryGame />
        </Container>
      );
    default:
      return <Navigate to="/jogos" replace={true} />;
  }
};
