import { Container, ImageWrapper, LessonLettersContentWrapper } from './styles';
import { words } from '../../assets/words';
import { useEffect, useState } from 'react';

export type WordsKey = keyof typeof words;

interface LessonOneWrapperProps {
  animal: WordsKey;
}

export const LessonOneWrapper = ({ animal }: LessonOneWrapperProps) => {
  const [allLetters, setAllLetters] = useState<NodeListOf<Element> | null>(
    null
  );
  const [allDropzones, setAllDropzones] = useState<NodeListOf<Element> | null>(
    null
  );

  function renderHouses() {
    const houses = [];

    let animalArray = animal.split('');
    let length = animalArray.length;

    for (let i = 0; i < length; i++) {
      let position = Math.floor(Math.random() * animalArray.length);
      houses.push(
        <div className="dropzone" key={i}>
          <div className="letter" draggable="true">
            {animalArray[position].toUpperCase()}
          </div>
        </div>
      );
      animalArray.splice(position, 1);
    }

    return houses;
  }

  function renderEmptyHouses() {
    const emptyHouses = [];

    for (let i = 0; i < animal.length; i++) {
      emptyHouses.push(<div className="dropzone" key={i} />);
    }

    return emptyHouses;
  }

  function dragstart(this: Element) {
    this.classList.add('is-dragging');
    this.parentElement?.classList.add('last-zone');
  }

  function dragend(this: Element) {
    this.classList.remove('is-dragging');
  }

  function dragover(this: Element) {
    const cardBeingDragged = document.querySelector('.is-dragging');
    const lastZone = document.querySelector('.last-zone');

    console.log();

    if (this.children[0] && this.children[0] !== cardBeingDragged) {
      this.classList.add('not-over');
      if (cardBeingDragged && lastZone) {
        lastZone.appendChild(cardBeingDragged);
      }
    } else {
      this.classList.add('over');
      if (cardBeingDragged) this.appendChild(cardBeingDragged);
    }
  }

  function dragleave(this: Element) {
    this.classList.remove('over');
    this.classList.remove('not-over');

    const lastZone = document.querySelector('.last-zone');
    if (lastZone) lastZone.classList.remove('last-zone');
  }

  function drop(this: Element) {
    this.classList.remove('over');

    const lastZone = document.querySelector('.last-zone');
    if (lastZone) lastZone.classList.remove('last-zone');
  }

  useEffect(() => {
    const letter = document.querySelectorAll('.letter');
    const dropzone = document.querySelectorAll('.dropzone');

    if (letter) setAllLetters(letter);
    if (dropzone) setAllDropzones(dropzone);
  }, []);

  useEffect(() => {
    if (allLetters)
      allLetters.forEach((letter) => {
        letter.addEventListener('dragstart', dragstart);
        letter.addEventListener('dragend', dragend);
      });

    if (allDropzones)
      allDropzones.forEach((dropzone) => {
        dropzone.addEventListener('dragover', dragover);
        dropzone.addEventListener('dragleave', dragleave);
        dropzone.addEventListener('drop', drop);
      });
  }, [allLetters, allDropzones]);

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
        <div className="line">{renderHouses()}</div>
        <div className="line">{renderEmptyHouses()}</div>
      </LessonLettersContentWrapper>
    </Container>
  );
};
