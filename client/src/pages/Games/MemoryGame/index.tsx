import { useEffect, useState } from 'react';

import { CardGrid, Container } from './styles';

import { cardImages } from '@assets/memoryGame';
import { CommonBody } from '@components/CommonBody';
import { HeaderBar } from '@components/HeaderBar';
import { CardImage, MemoryGameParams } from '@interfaces/memoryGame';
import { shuffleArray } from '@utils/array';
import { Card } from './Card';

function MemoryGame() {
  const [cards, setCards] = useState<CardImage[]>([]);
  const [params, setParams] = useState<MemoryGameParams>({
    choices: [undefined, undefined],
    turns: 0,
    hits: 0,
  });

  const randomizeCards = () => {
    const resetCards = cardImages.map((card) => ({ ...card, matched: false }));
    const shuffledCards = shuffleArray(resetCards);

    setParams({
      choices: [undefined, undefined],
      turns: 0,
      hits: 0,
    });

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
          choices: [undefined, undefined],
          hits: oldParams.hits + 1,
          turns: oldParams.turns + 1,
        }));

        if (cards.every((card) => card.matched)) {
          // Abro o modal
        }
      } else {
        setTimeout(
          () =>
            setParams((oldParams) => ({
              choices: [undefined, undefined],
              hits: oldParams.hits,
              turns: oldParams.turns + 1,
            })),
          1000
        );
      }
    }
  }, [params.choices[0], params.choices[1]]);

  useEffect(() => {
    randomizeCards();
  }, []);

  return (
    <CommonBody
      header={
        <HeaderBar
          title={{
            complete: 'Jogo da Memória',
            resume: '',
          }}
          children={
            <>
              <p>ACERTOS: {params.hits}</p>
              <p>TURNOS: {params.turns}</p>
              <button onClick={randomizeCards}>NOVO JOGO</button>
            </>
          }
        />
      }
      background="farm"
    >
      <Container>
        <CardGrid>
          {cards.map((card, index) => (
            <Card
              key={index}
              card={card}
              params={params}
              setParams={setParams}
            />
          ))}
        </CardGrid>
      </Container>
    </CommonBody>
  );
}

export default MemoryGame;
