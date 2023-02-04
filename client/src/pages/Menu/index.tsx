import { Container } from './styles';
import { games } from '../../assets/games';
import { GamePreview } from './GamePreview';

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
}
