import backOfCardImage from '@assets/images/backOfCard.png';
import { CardImage, MemoryGameParams } from '@interfaces/memoryGame';
import { useCallback, useMemo } from 'react';
import { Container } from './styles';

type CardProps = {
  card: CardImage;
  params: MemoryGameParams;
  setParams: React.Dispatch<React.SetStateAction<MemoryGameParams>>;
};

export function Card({ card, params, setParams }: CardProps) {
  const { choices } = params;

  const visible = useMemo(
    () => card === choices[0] || card === choices[1] || card.matched,
    [card, params.choices[0], params.choices[1], card.matched]
  );

  const disabled = useMemo(
    () => (!!choices[0] && !!choices[1]) || visible,
    [params.choices[0], params.choices[1], visible]
  );

  const handleChoice = useCallback(
    (card: CardImage) => {
      if (disabled) return;

      !choices[0]
        ? setParams((oldParams) => ({
            ...oldParams,
            choices: [card, undefined],
          }))
        : setParams((oldParams) => ({
            ...oldParams,
            choices: [oldParams.choices[0], card],
          }));
    },
    [params.choices[0], params.choices[1]]
  );

  return (
    <Container visible={visible} disabled={disabled}>
      <img className="frontOfCard" src={card.src} alt="Card Front" />
      <img
        className="backOfCard"
        src={backOfCardImage}
        alt="Lado de trás do carta."
        onClick={() => handleChoice(card)}
      />
    </Container>
  );
}
