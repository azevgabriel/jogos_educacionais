import { Container } from './styles';
import { games } from '../../assets/games';
import { GamePreview } from './GamePreview';

import NoImage from '../../assets/images/no-image.png';




export const Menu = () => {
  return (
    <Container>
      {Object.entries(games).map(([key, value]) => (
        <GamePreview
          key={`game-${key}`}
          title={value.name}
          description={value.description}
          src={value.src ? value.src : NoImage}
          link={value.link}
        />
      ))}
    </Container>
  );
}
