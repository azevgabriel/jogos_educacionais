import { Container } from './styles';

import trophyImage from '../../../assets/images/trophy.png';
import { useLessonOne } from '../../../hooks/UseLessonOne';
import { useCallback, useState } from 'react';

interface ModalProps {}

export const Modal = ({}: ModalProps) => {
  const { nextAnimal, modalOpen, closeMenu } = useLessonOne();

  // const handleBackMenu = useCallback(() => {
  //   setIsModalOpen(false);
  // }, []);

  const handleNextAnimal = useCallback(() => {
    closeMenu();
    nextAnimal();
  }, [nextAnimal]);

  return (
    <Container isVisibility={modalOpen}>
      <img src={trophyImage} alt="Imagem de um troféu" />
      <div className="rightWrapper">
        <h1>Parabéns, você completou a palavra!</h1>
        <button disabled={true}>
          <p>Voltar para a página inicial</p>
        </button>
        <button onClick={handleNextAnimal}>
          <p>Próxima palavra!</p>
        </button>
      </div>
    </Container>
  );
};
