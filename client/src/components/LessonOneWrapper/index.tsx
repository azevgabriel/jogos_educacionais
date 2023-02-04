import { words } from '@assets/words';
import { useLessonOne } from '@hooks/UseLessonOne';
import { EventTypes } from '@interfaces/device';
import { dragEnd, dragStart } from '@utils/dragEvents';
import { dragLeave, dragOver, drop } from '@utils/dropzoneEvents';
import { dragEndTouch, dragStartTouch, dragTouch } from '@utils/touchEvents';
import { useEffect, useMemo, useState } from 'react';
import { EmptyHouse } from './EmptyHouse';
import { Modal } from './Modal';
import { Container, ImageWrapper, LessonLettersContentWrapper } from './styles';

export type WordsKey = keyof typeof words;

interface LessonOneWrapperProps {
  animal: WordsKey;
  typeOfEvent: EventTypes;
}

export const LessonOneWrapper = ({
  animal,
  typeOfEvent,
}: LessonOneWrapperProps) => {
  const { catchDropzoneModifier, catchMousePosition } = useLessonOne();
  const [housesWithLetters, setHousesWithLetters] = useState<
    JSX.Element[] | null
  >(null);
  const [freeHouses, setFreeHouses] = useState<JSX.Element[] | null>(null);
  const [auxAnimal, setAuxAnimal] = useState<WordsKey | null>(null);

  const houses = useMemo(() => {
    if (animal === auxAnimal) {
      return housesWithLetters;
    }

    const houses = [];
    setAuxAnimal(animal);

    let animalArray = animal.split('');
    let length = animalArray.length;

    for (let i = 0; i < length; i++) {
      let position = Math.floor(Math.random() * animalArray.length);
      houses.push(
        <div
          className={`dropzone initialFullHouse ${animal}-${i}`}
          key={`${animal}-${i}`}
        >
          <div className={`letter ${animal}-${i}`} draggable="true">
            <p>{animalArray[position].toUpperCase()}</p>
          </div>
        </div>
      );
      animalArray.splice(position, 1);
    }

    setHousesWithLetters(houses);
    return houses;
  }, [animal, auxAnimal]);

  const emptyHouses = useMemo(() => {
    if (animal === auxAnimal) {
      return freeHouses;
    }

    setAuxAnimal(animal);
    const emptyHouses = [];

    let animalArray = animal.split('');

    for (let i = 0; i < animal.length; i++) {
      emptyHouses.push(
        <EmptyHouse
          key={`emptyHouse-${animal}-${i}`}
          secondClass={`emptyHouse-${animal}-${i}`}
          solution={animalArray[i].toUpperCase()}
        />
      );
    }

    setFreeHouses(emptyHouses);
    return emptyHouses;
  }, [animal, auxAnimal]);

  useEffect(() => {
    const allLetters = document.querySelectorAll(
      '.letter'
    ) as NodeListOf<HTMLElement>;
    const allDropzones = document.querySelectorAll(
      '.dropzone'
    ) as NodeListOf<HTMLElement>;

    if (allLetters)
      allLetters.forEach((letter) => {
        if (typeOfEvent === EventTypes.MOUSE) {
          letter.addEventListener('dragstart', () => dragStart(letter));
          letter.addEventListener('dragend', () => dragEnd(letter));
          letter.addEventListener('drag', function (event) {
            catchMousePosition(event, letter);
          });
        } else {
          letter.addEventListener('touchstart', (e) =>
            dragStartTouch(e, letter)
          );
          letter.addEventListener('touchmove', (e) =>
            dragTouch(e, letter, catchMousePosition)
          );
          letter.addEventListener('touchend', () =>
            dragEndTouch(letter, catchDropzoneModifier)
          );
        }
      });

    if (allDropzones)
      allDropzones.forEach((dropzone) => {
        dropzone.addEventListener('dragover', (e) => dragOver(e, dropzone));
        dropzone.addEventListener('dragleave', () => dragLeave(dropzone));
        dropzone.addEventListener('drop', () =>
          drop(dropzone, catchDropzoneModifier)
        );
      });
  }, [animal]);

  return (
    <>
      <Modal />
      <Container>
        <ImageWrapper>
          <img src={words[animal].src} alt={words[animal].alt} />
        </ImageWrapper>
        <LessonLettersContentWrapper numberOfLetters={animal.length}>
          <div className="nameContent">
            <h1>{animal.toUpperCase()}</h1>
          </div>
          <div className="line">{houses}</div>
          <div className="line">{emptyHouses}</div>
        </LessonLettersContentWrapper>
      </Container>
    </>
  );
};
