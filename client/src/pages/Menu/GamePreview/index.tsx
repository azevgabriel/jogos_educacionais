import { ContentGame, ImageWrapper, StyledLink } from './styles';

interface GamePreviewProps {
  title: string;
  description: string;
  src: string;
  link: string;
  available: boolean;
}

export const GamePreview = ({
  title,
  description,
  src,
  link,
  available,
}: GamePreviewProps) => {
  return (
    <StyledLink
      tabIndex={available ? 0 : -1}
      to={available ? link : ''}
      available={available.toString()}
    >
      <ImageWrapper source={src} />
      <ContentGame>
        <h2>{title}</h2>
        <p>{description}</p>
      </ContentGame>
    </StyledLink>
  );
};
