import { CardImage } from '@interfaces/memoryGame';
import { Container, Content } from './styles';

type CardProps = {
  card: CardImage;
  flipped: boolean;
  disabled: boolean;
  handleChoice: (card: CardImage) => void;
};

export function Card({ card, flipped, disabled, handleChoice }: CardProps) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <Container>
      <Content flipped={flipped}>
        <img className="cardFront" src={card.src} alt="Card Front" />
        <img
          className="cardBack"
          src="/images/cover.png"
          alt="Card Back"
          onClick={handleClick}
        />
      </Content>
    </Container>
  );
}
