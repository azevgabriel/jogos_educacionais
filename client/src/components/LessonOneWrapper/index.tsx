import { Container, ImageWrapper, LessonLettersContentWrapper } from './styles';
import { words } from '../../assets/words';
import { useCallback, useEffect, useState } from 'react';
import { EmptyHouse } from './EmptyHouse';

export type WordsKey = keyof typeof words;

interface LessonOneWrapperProps {
  animal: WordsKey;
}

export const LessonOneWrapper = ({ animal }: LessonOneWrapperProps) => {
  const renderHouses = useCallback(() => {
    const houses = [];

    let animalArray = animal.split('');
    let length = animalArray.length;

    for (let i = 0; i < length; i++) {
      let position = Math.floor(Math.random() * animalArray.length);
      houses.push(
        <div className="dropzone initialFullHouse" key={`${animal}-${i}`}>
          <div className={`letter`} draggable="true">
            <p>{animalArray[position].toUpperCase()}</p>
          </div>
        </div>
      );
      animalArray.splice(position, 1);
    }

    return houses;
  }, [animal]);

  const renderEmptyHouses = useCallback(() => {
    const emptyHouses = [];

    let animalArray = animal.split('');

    for (let i = 0; i < animal.length; i++) {
      console.log(animalArray[i].toUpperCase());
      emptyHouses.push(
        <EmptyHouse
          key={`emptyHouse-${animal}-${i}`}
          secondClass={`emptyHouse-${animal}-${i}`}
          solution={animalArray[i].toUpperCase()}
        />
      );
    }

    return emptyHouses;
  }, [animal]);

  function dragStart(this: Element) {
    this.classList.add('is-dragging');
    this.parentElement?.classList.add('last-zone');
    this.parentElement?.classList.add('empty');
  }

  function dragEnd(this: Element) {
    this.classList.remove('is-dragging');
  }

  function dragOver(this: Element) {
    const cardBeingDragged = document.querySelector('.is-dragging');
    const lastZone = document.querySelector('.last-zone');

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

  function dragLeave(this: Element) {
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
    renderHouses();
    renderEmptyHouses();

    const allLetters = document.querySelectorAll('.letter');
    const allDropzones = document.querySelectorAll('.dropzone');

    if (allLetters) {
      allLetters.forEach((letter) => {
        letter.addEventListener('dragstart', dragStart);
        letter.addEventListener('dragend', dragEnd);
      });
    }

    if (allDropzones)
      allDropzones.forEach((dropzone) => {
        dropzone.addEventListener('dragover', dragOver);
        dropzone.addEventListener('dragleave', dragLeave);
        dropzone.addEventListener('drop', drop);
      });
  }, [animal]);

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
