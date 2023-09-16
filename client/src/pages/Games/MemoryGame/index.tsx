import { useEffect, useState } from 'react';

import { CardGrid, Container } from './styles';

import { CardImage } from '@interfaces/memoryGame';
import { Card } from './Card';

const cardImages: CardImage[] = [
  { id: 0, src: '/images/AguaViva.svg', cor: 'azul', matched: false },
  { id: 0, src: '/images/Arara.svg', cor: 'verde', matched: false },
  { id: 0, src: '/images/Borboleta.svg', cor: 'verde', matched: false },
  { id: 0, src: '/images/Cachorro.svg', cor: 'vermelho', matched: false },
  { id: 0, src: '/images/Carangueijo.svg', cor: 'azul', matched: false },
  { id: 0, src: '/images/Coruja.svg', cor: 'verde', matched: false },
  { id: 0, src: '/images/Elefante.svg', cor: 'vermelho', matched: false },
  { id: 0, src: '/images/EstrelaMar.svg', cor: 'azul', matched: false },
  { id: 0, src: '/images/Gato.svg', cor: 'vermelho', matched: false },
  { id: 0, src: '/images/Girafa.svg', cor: 'vermelho', matched: false },
  { id: 0, src: '/images/Grilo.svg', cor: 'verde', matched: false },
  { id: 0, src: '/images/Leao.svg', cor: 'vermelho', matched: false },
  { id: 0, src: '/images/Lhama.svg', cor: 'vermelho', matched: false },
  { id: 0, src: '/images/Libelula.svg', cor: 'verde', matched: false },
  { id: 0, src: '/images/Morcego.svg', cor: 'verde', matched: false },
  { id: 0, src: '/images/Pantera.svg', cor: 'vermelho', matched: false },
  { id: 0, src: '/images/PeixeAquario.svg', cor: 'azul', matched: false },
  { id: 0, src: '/images/PeixeBolha.svg', cor: 'azul', matched: false },
  { id: 0, src: '/images/Peixe.svg', cor: 'azul', matched: false },
  { id: 0, src: '/images/Polvo.svg', cor: 'azul', matched: false },
  { id: 0, src: '/images/Pombo.svg', cor: 'verde', matched: false },
  { id: 0, src: '/images/Tubarao.svg', cor: 'azul', matched: false },
  { id: 0, src: '/images/Tucano.svg', cor: 'verde', matched: false },
  { id: 0, src: '/images/Urso.svg', cor: 'vermelho', matched: false },
];

function MemoryGame() {
  const [cards, setCards] = useState<CardImage[]>([]);
  const [turns, setTurns] = useState(0);
  const [corrects, setCorrects] = useState(0);
  const [choiceOne, setChoiceOne] = useState<CardImage>();
  const [choiceTwo, setChoiceTwo] = useState<CardImage>();
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards: CardImage[] = [...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne((prevState) => (prevState = undefined));
    setChoiceTwo((prevState) => (prevState = undefined));
    setCards(shuffledCards);
    setTurns(0);
    setCorrects(0);
  };

  const handleChoice = (card: CardImage) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(false);
      if (choiceOne.cor === choiceTwo.cor) {
        choiceOne.matched = true;
        choiceTwo.matched = true;
        setCorrects(corrects + 1);
        resetTurn();
        if (cards.every((card) => card.matched)) {
          // Abro o modal
        }
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo, cards, corrects]);

  useEffect(() => {
    shuffleCards();
  }, []);

  const resetTurn = () => {
    setChoiceOne((prevState) => (prevState = undefined));
    setChoiceTwo((prevState) => (prevState = undefined));
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <Container>
      <div className="topo">
        <button onClick={shuffleCards}>NOVO JOGO</button>
        <p>ACERTOS: {corrects}</p>
        <p>TENTATIVAS: {turns}</p>
      </div>

      <CardGrid>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </CardGrid>
    </Container>
  );
}

export default MemoryGame;
