import { StyledLink, ImageWrapper, ContentGame } from './styles';

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
  available
}: GamePreviewProps) => {
  return (
    <StyledLink to={available ? link : ''} available={available}  >
      <ImageWrapper source={src} />
      <ContentGame>
        <h2>{title}</h2>
        <p>{description}</p>
      </ContentGame>
    </StyledLink>
  );
};
