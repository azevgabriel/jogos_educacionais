import { memoryGameContextData } from '@assets/memoryGame';
import { CommonBody } from '@components/CommonBody';
import { HeaderBar } from '@components/HeaderBar';
import { GiOnTarget, GiTargetDummy } from '@components/Icons';
import { Modal } from '@components/Modal';
import { Button } from '@components/utils';
import { CardImage, MemoryGameParams } from '@interfaces/memoryGame';
import { shuffleArray } from '@utils/array';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Card } from './Card';
import { CardGrid, Container, HeaderBarChildren, ScoreWrapper } from './styles';

export const MemoryGame = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cards, setCards] = useState<CardImage[]>([]);
  const [params, setParams] = useState<MemoryGameParams>({
    choices: [undefined, undefined],
    turns: 0,
    hits: 0,
    progress: 0,
  });

  const randomizeCards = (progress: number) => {
    const cards = memoryGameContextData[progress].cards;

    setParams({
      choices: [undefined, undefined],
      turns: 0,
      hits: 0,
      progress,
    });

    const resetCards = cards.map((card) => ({
      ...card,
      matched: false,
    }));
    const shuffledCards = shuffleArray(resetCards);

    setCards(shuffledCards);
  };

  useEffect(() => {
    const { choices } = params;
    const [choiceOne, choiceTwo] = choices;

    if (choiceOne && choiceTwo) {
      setParams((oldParams) => ({ ...oldParams, cardsDisabled: true }));

      if (choiceOne.src === choiceTwo.src) {
        choiceOne.matched = true;
        choiceTwo.matched = true;

        setParams((oldParams) => ({
          ...oldParams,
          choices: [undefined, undefined],
          hits: oldParams.hits + 1,
          turns: oldParams.turns + 1,
        }));

        if (cards.every((card) => card.matched)) {
          setModalOpen(true);
        }
      } else {
        setTimeout(
          () =>
            setParams((oldParams) => ({
              ...oldParams,
              choices: [undefined, undefined],
              turns: oldParams.turns + 1,
            })),
          1000
        );
      }
    }
  }, [params.choices[0], params.choices[1]]);

  useEffect(() => {
    randomizeCards(0);
  }, []);

  return (
    <CommonBody
      background="adventureTime"
      header={
        <HeaderBar
          title={{
            complete: 'Jogo da Memória',
            resume: '',
          }}
          children={
            <HeaderBarChildren>
              <ScoreWrapper>
                <div className="content">
                  <div className="content-title">
                    <h4>ACERTOS</h4>
                  </div>
                  <div className="content-score">
                    <GiOnTarget size={30} />
                    <span>{params.hits}</span>
                  </div>
                </div>
                <div className="content">
                  <div className="content-title">
                    <h4>TURNOS</h4>
                  </div>
                  <div className="content-score">
                    <GiTargetDummy size={30} />
                    <span>{params.turns}</span>
                  </div>
                </div>
              </ScoreWrapper>
              <button onClick={() => randomizeCards(0)}>REINICIAR</button>
            </HeaderBarChildren>
          }
        />
      }
    >
      <Modal
        open={modalOpen}
        headerText="Parabéns, você completou o jogo da mémoria."
        bodyElement={
          <ReactMarkdown>
            {memoryGameContextData[params.progress].content}
          </ReactMarkdown>
        }
        footerElement={
          <Button
            width="90%"
            height="50%"
            onClick={() => {
              setModalOpen(false);
              if (params.progress < memoryGameContextData.length - 1)
                randomizeCards(params.progress + 1);
              else randomizeCards(0);
            }}
            type="default"
            ariaLabel={
              params.progress === memoryGameContextData.length - 1
                ? 'Reiniciar'
                : 'Ir para o próximo nível'
            }
            text={
              params.progress === memoryGameContextData.length - 1
                ? 'Reiniciar'
                : 'Ir para o próximo nível'
            }
          />
        }
      />
      <Container>
        <CardGrid>
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              params={params}
              setParams={setParams}
            />
          ))}
        </CardGrid>
      </Container>
    </CommonBody>
  );
};
