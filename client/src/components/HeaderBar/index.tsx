import { useMemo } from 'react';
import { Container, Logo } from './styles';

import { TiArrowBack } from '@components/Icons';
import { Button } from '@components/utils';
import { useLocation, useNavigate } from 'react-router-dom';

interface HeaderBarProps {
  children?: React.ReactNode;
  title: {
    complete: string;
    resume: string;
  };
}

export const HeaderBar = ({ children, title }: HeaderBarProps) => {
  const navigation = useNavigate();
  const { pathname } = useLocation();

  const headerTitle = useMemo(() => {
    const width = window.innerWidth;
    const resume = width < 800;

    if (pathname === '/jogos')
      return <h1>{resume ? 'JI' : 'Jogos Inclusivos'}</h1>;

    return (
      <>
        <Button
          onClick={() => navigation('/jogos')}
          type="link"
          width="40px"
          icon={<TiArrowBack size={40} />}
          ariaLabel="Voltar para a página de jogos"
        />
        <h1>{resume ? title.resume : title.complete}</h1>
      </>
    );
  }, [location, window.innerWidth]);

  return (
    <Container>
      <Logo>{headerTitle}</Logo>
      {children}
    </Container>
  );
};
