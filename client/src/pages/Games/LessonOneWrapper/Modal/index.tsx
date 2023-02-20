import { useCallback } from 'react';

import { Container } from './styles';

import trophyImage from '@assets/images/trophy.png';

import { useLessonOne } from '@hooks/useLessonOne';
import { convertToCsv } from '@utils/csv';

import { useConfig } from '@hooks/useConfig';
import { useNavigate } from 'react-router-dom';

export const Modal = () => {
  const navigate = useNavigate();
  const {
    nextAnimal,
    modalOpen,
    closeMenu,
    index,
    restart,
    animal,
    getReport,
  } = useLessonOne();
  const { getUser } = useConfig();

  const restartLesson = useCallback(() => {
    closeMenu();
    restart();
  }, [closeMenu, restart]);

  const handleNextAnimal = useCallback(() => {
    closeMenu();
    nextAnimal();
  }, [nextAnimal]);

  const handlePrint = useCallback(() => {
    const reports = getReport();
    convertToCsv(reports, animal, getUser());
  }, [animal]);

  return (
    <Container isVisibility={modalOpen}>
      <img src={trophyImage} alt="Imagem de um troféu" />
      <div className="rightWrapper">
        <h1>Parabéns, você completou a palavra!</h1>
        <button
          onClick={() => {
            closeMenu();
            navigate('/');
          }}
        >
          <p>Voltar para a página inicial</p>
        </button>
        {index === 10 ? (
          <button onClick={restartLesson}>
            <p>Recomeçar!</p>
          </button>
        ) : (
          <button onClick={handleNextAnimal}>
            <p>Próxima palavra!</p>
          </button>
        )}
        <button onClick={handlePrint}>
          <p>Imprimir dados</p>
        </button>
      </div>
    </Container>
  );
};
