import { useCallback } from 'react';

import { Container } from './styles';

import trophyImage from '@assets/images/trophy.png';

import { useLessonOne } from '@hooks/useLessonOne';

import { Button } from '@components/utils';
import { useNavigate } from 'react-router-dom';

export const Modal = () => {
  const navigate = useNavigate();
  const { nextAnimal, modalOpen, closeMenu, index, restart } = useLessonOne();
  // const { user } = useConfig();

  const restartLesson = useCallback(() => {
    closeMenu();
    restart();
  }, [closeMenu, restart]);

  const handleNextAnimal = useCallback(() => {
    closeMenu();
    nextAnimal();
  }, [nextAnimal]);

  // const handlePrint = useCallback(() => {
  //   const reports = getReport();
  //   convertToCsv(reports, animal, user);
  // }, [animal]);

  return (
    <Container isVisibility={modalOpen}>
      <img src={trophyImage} alt="Imagem de um troféu" />
      <div className="rightWrapper">
        <h1>Parabéns, você completou a palavra!</h1>
        <Button
          onClick={() => {
            closeMenu();
            navigate('/');
          }}
          text="Voltar para a página inicial"
          ariaLabel="Voltar para a página inicial"
          type="default"
          width="100%"
          height="50px"
        />
        {index === 10 ? (
          <Button
            onClick={restartLesson}
            text="Recomeçar!"
            ariaLabel="Recomeçar o jogo: Escrever o nome do animal."
            type="default"
            width="100%"
            height="50px"
          />
        ) : (
          <Button
            onClick={handleNextAnimal}
            text="Próxima palavra!"
            ariaLabel="Ir para a próxima palavra do jogo: Escrever o nome do animal."
            type="default"
            width="100%"
            height="50px"
          />
        )}
      </div>
    </Container>
  );
};
