import { games } from '@assets/games';
import { GamePreview } from './GamePreview';
import { Container } from './styles';

export const Menu = () => {
  return (
    <Container>
      {Object.entries(games).map(([key, value]) => (
        <GamePreview
          key={`game-${key}`}
          title={value.name}
          description={value.description}
          src={value.src}
          link={value.link}
          available={value.available}
        />
      ))}
    </Container>
  );
};
