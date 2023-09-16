import { games } from '@assets/games';
import { CommonBody } from '@components/CommonBody';
import { GamePreview } from './GamePreview';
import { Container } from './styles';

export const Menu = () => {
  return (
    <Container>
      <CommonBody background="menu">
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
      </CommonBody>
    </Container>
  );
};
