import { StyledLink, ImageWrapper, ContentGame } from './styles';

interface GamePreviewProps {
  title: string;
  description: string;
  src: string;
  link: string;
}

export const GamePreview = ({
  title,
  description,
  src,
  link,
}: GamePreviewProps) => {
  return (
    <StyledLink to={link}>
      <ImageWrapper source={src} />
      <ContentGame>
        <h2>{title}</h2>
        <p>{description}</p>
      </ContentGame>
    </StyledLink>
  );
};
