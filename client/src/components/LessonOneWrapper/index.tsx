import { Container, ImageWrapper, LessonLettersContentWrapper } from './styles';
import { words } from '../../assets/words';

export type WordsKey = keyof typeof words;

interface LessonOneWrapperProps {
  animal: WordsKey;
}

export const LessonOneWrapper = ({ animal }: LessonOneWrapperProps) => {
  function renderHouses() {
    const houses = [];

    let animalArray = animal.split('');
    let length = animalArray.length;

    for (let i = 0; i < length; i++) {
      let position = Math.floor(Math.random() * animalArray.length);
      houses.push(
        <div className="house" key={i}>
          <span>{animalArray[position].toUpperCase()}</span>
        </div>
      );
      animalArray.splice(position, 1);
    }

    return houses;
  }

  function renderEmptyHouses() {
    const emptyHouses = [];

    for (let i = 0; i < animal.length; i++) {
      emptyHouses.push(<div className="emptyHouse" key={i} />);
    }

    return emptyHouses;
  }

  return (
    <Container>
      <ImageWrapper>
        <img
          src={`/src/assets/images/${words[animal].src}`}
          alt={words[animal].alt}
        />
      </ImageWrapper>
      <LessonLettersContentWrapper numberOfLetters={animal.length}>
        <div className="nameContent">
          <h1>{animal.toUpperCase()}</h1>
        </div>
        <div className="modelContent">{renderHouses()}</div>
        <div className="emptyContent">{renderEmptyHouses()}</div>
      </LessonLettersContentWrapper>
    </Container>
  );
};
