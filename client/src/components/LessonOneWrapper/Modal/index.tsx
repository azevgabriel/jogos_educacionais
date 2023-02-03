import { useCallback } from 'react';

import { Container, ButtonLink } from './styles';

import trophyImage from '../../../assets/images/trophy.png';

import { useLessonOne } from '../../../hooks/UseLessonOne';

import jsPDF from 'jspdf';

export const Modal = () => {
  const { nextAnimal, modalOpen, closeMenu, index, restart, animal } = useLessonOne();

  const restartLesson = useCallback(() => {
    closeMenu();
    restart();
  }, [closeMenu, restart]);

  const handleNextAnimal = useCallback(() => {
    closeMenu();
    nextAnimal();
  }, [nextAnimal]);

  const clickImprimir = useCallback(()=>
{
  // const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFont("helvetica");
  doc.setFontSize(11);
  doc.text("RELATÓRIO DA PARTIDA", 20, 15);
  doc.text("Nome do animal: " + animal, 20, 25);
  // doc.save("dados_usuario.pdf");
  doc.output("dataurlnewwindow");
}, [animal])
  
  return (
    <Container isVisibility={modalOpen}>
      <img src={trophyImage} alt="Imagem de um troféu" />
      <div className="rightWrapper">
        <h1>Parabéns, você completou a palavra!</h1>
        <ButtonLink to="/jogos">
          <p>Voltar para a página inicial</p>
        </ButtonLink>
        {index === 10 ? (
          <button onClick={restartLesson}>
            <p>Recomeçar!</p>
          </button>
        ) : (
          <button onClick={handleNextAnimal}>
            <p>Próxima palavra!</p>
          </button>
        )}
          <button onClick={clickImprimir}>
            <p>Imprimir dados</p>
          </button>
      </div>
    </Container>
  );
};
