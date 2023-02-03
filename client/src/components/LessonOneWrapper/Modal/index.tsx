import { useCallback } from 'react';

import { Container, ButtonLink } from './styles';

import trophyImage from '../../../assets/images/trophy.png';

import { useLessonOne } from '../../../hooks/UseLessonOne';


export const Modal = () => {
  const { nextAnimal, modalOpen, closeMenu, index, restart, animal, getReport } = useLessonOne();

  const restartLesson = useCallback(() => {
    closeMenu();
    restart();
  }, [closeMenu, restart]);

  const handleNextAnimal = useCallback(() => {
    closeMenu();
    nextAnimal();
  }, [nextAnimal]); 

  const saveAs = (blob: Blob, fileName: string) => {
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  }

  const handlePrint = useCallback(()=> {
    const reports = getReport()
    const breakLine = '\n'
    let text = `RELATÓRIO DO USUÁRIO\n\nAnimal:; ${animal}` + breakLine

    reports.forEach((report) => {
      text = text + breakLine + `Letra:; ${report.letter}` + breakLine + breakLine + 'x:; y:' + breakLine
        report.positions.forEach((position, index) => {
          text = text + `${position.x};${position.y}` + breakLine 
        })
        text = text + `Tempo:; ${report.time}` + breakLine + breakLine 
      })

    var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "dados.txt");
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
          <button onClick={handlePrint}>
            <p>Imprimir dados</p>
          </button>
      </div>
    </Container>
  );
};
