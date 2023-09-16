import { useConfig } from '@hooks/useConfig';
import { useMemo } from 'react';
import { Button, Container, Logo } from './styles';

import { IoContrastOutline } from '@react-icons/all-files/io5/IoContrastOutline';

import librasPng from '../../assets/images/libras.png';

export const HeaderBar = () => {
  const { getLibras, setLibras } = useConfig();

  const headerTitle = useMemo(() => {
    const width = window.innerWidth;
    const resume = width < 800;

    return <h1>{resume ? '' : 'Escreva o nome do animal!'}</h1>;
  }, [window.location.pathname, window.innerWidth]);

  return (
    <Container>
      <Logo>{headerTitle}</Logo>
      <Button
        onClick={() => {
          const libras = getLibras();
          setLibras(!libras);
        }}
      >
        <img
          src={librasPng}
          alt="Ícone com duas mãos dizendo em libras: Libras. Clique para ativar ou desativar a visualização em libras."
        />
      </Button>
      <Button
        onClick={() => {
          const libras = getLibras();
          setLibras(!libras);
        }}
      >
        <IoContrastOutline />
      </Button>
    </Container>
  );
};
