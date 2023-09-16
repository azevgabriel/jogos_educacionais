import { useConfig } from '@hooks/useConfig';
import { useMemo } from 'react';
import { Container, HeaderBarButton, Logo } from './styles';

import { IoContrastOutline, TiArrowBack } from '@components/Icons';
import { Button } from '@components/utils';
import { useNavigate } from 'react-router-dom';
import librasPng from '../../assets/images/libras.png';

export const HeaderBar = () => {
  const { getLibras, setLibras } = useConfig();
  const navigation = useNavigate();

  const headerTitle = useMemo(() => {
    const path = window.location.pathname;
    const width = window.innerWidth;
    const resume = width < 800;

    if (path === '/jogos/letras')
      return (
        <>
          <Button
            onClick={() => navigation('/jogos')}
            type="link"
            width="40px"
            icon={<TiArrowBack size={40} />}
            ariaLabel="Voltar para a página de jogos"
          />
          <h1>{resume ? '' : 'Escreva o nome do animal!'}</h1>
        </>
      );

    return <h1>{resume ? 'JI' : 'Jogos Inclusivos'}</h1>;
  }, [window.location.pathname, window.innerWidth]);

  return (
    <Container>
      <Logo>{headerTitle}</Logo>
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
    </Container>
  );
};
