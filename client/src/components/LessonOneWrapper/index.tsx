import { Container, ImageWrapper, LessonLettersContentWrapper } from './styles';
import { words } from '../../assets/words';
import { useCallback, useEffect, useState } from 'react';
import { EmptyHouse } from './EmptyHouse';
import { useLessonOne } from '../../hooks/UseLessonOne';
import { Modal } from './Modal';

export type WordsKey = keyof typeof words;

interface LessonOneWrapperProps {
  animal: WordsKey;
}

export const LessonOneWrapper = ({ animal }: LessonOneWrapperProps) => {
  const { catchDropzoneModifier, catchMousePosition } = useLessonOne();
  const [housesWithLetters, setHousesWithLetters] = useState<
    JSX.Element[] | null
  >(null);
  const [freeHouses, setFreeHouses] = useState<JSX.Element[] | null>(null);
  const [auxAnimal, setAuxAnimal] = useState<WordsKey | null>(null);

  const renderHouses = useCallback(() => {
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
          <div className={`letter`} draggable="true">
            <p>{animalArray[position].toUpperCase()}</p>
          </div>
        </div>
      );
      animalArray.splice(position, 1);
    }

    setHousesWithLetters(houses);
    return houses;
  }, [animal, housesWithLetters, auxAnimal]);

  const renderEmptyHouses = useCallback(() => {
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
  }, [animal, freeHouses, auxAnimal]);

  function dragStart(this: Element) {
    this.classList.add('is-dragging');
    this.parentElement?.classList.add('last-zone');
    this.parentElement?.classList.add('empty');
  }

  function dragEnd(this: Element) {
    this.classList.remove('is-dragging');
  }

  function dragOver(e: Event, el: Element) {
    e.preventDefault();
    const cardBeingDragged = document.querySelector('.is-dragging');
    const lastZone = document.querySelector('.last-zone');

    if (el.children[0] && el.children[0] !== cardBeingDragged) {
      el.classList.add('not-over');
      if (cardBeingDragged && lastZone) {
        lastZone.appendChild(cardBeingDragged);
      }
    } else {
      el.classList.add('over');
    }

    return false;
  }

  function dragLeave(this: Element) {
    this.classList.remove('over');
    this.classList.remove('not-over');
  }

  function drop(this: Element) {
    if (this.classList.contains('over')) {
      const cardBeingDragged = document.querySelector('.is-dragging');
      if (!cardBeingDragged) return;
      this.appendChild(cardBeingDragged);
      this.classList.remove('over');

      catchDropzoneModifier(this.className);
    }

    this.classList.remove('not-over');
  }

  /************************* DRAG & DROP TOUCH FUNCTIONS *************************/

  var currentX: number;
  var currentY: number;
  var initialX: number;
  var initialY: number;
  var xOffset = 0;
  var yOffset = 0;

  const dragStartTouch = useCallback((e: Event, el: Element) => {
    el.classList.add('is-dragging');
    el.parentElement?.classList.add('last-zone');

    let touchEvent = e as TouchEvent;
    xOffset = 0;
    yOffset = 0;
    currentX = 0;
    currentY = 0;
    initialX = touchEvent.touches[0].clientX - xOffset;
    initialY = touchEvent.touches[0].clientY - yOffset;
  }, []);

  const dragTouch = useCallback((e: TouchEvent, el: Element) => {
    catchMousePosition(e, el)
    e.preventDefault();
    let touchEvent = e as TouchEvent;
    currentX = touchEvent.touches[0].clientX - initialX;
    currentY = touchEvent.touches[0].clientY - initialY;
    xOffset = currentX;
    yOffset = currentY;
    setTranslate(currentX, currentY, el);
  }, []);

  function dragEndTouch(el: Element) {
    const allDropzones = document.querySelectorAll('.dropzone');
    const cardBeingDraggedSize = el.getBoundingClientRect();

    for (let i = 0; i < allDropzones.length; i++) {
      const dropzone = allDropzones[i];
      const dropzoneSize = dropzone.getBoundingClientRect();

      if (dropzone.children.length === 0)
        if (
          el.parentElement &&
          el.parentElement.className !== dropzone.className
        )
          if (
            cardBeingDraggedSize.left >= dropzoneSize.left &&
            cardBeingDraggedSize.right <= dropzoneSize.right &&
            cardBeingDraggedSize.top <= dropzoneSize.top &&
            cardBeingDraggedSize.bottom >= dropzoneSize.bottom
          ) {
            dropzone.appendChild(el);
            catchDropzoneModifier(dropzone.className);
            break;
          }
    }

    setTranslate(0, 0, el);

    el.classList.remove('is-dragging');
  }

  function setTranslate(xPos: number, yPos: number, el: Element) {
    //Im not sure what this does but it dosnt work without it
    let htmlElement = el as HTMLElement;
    htmlElement.style.transform =
      'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)';
  }

  useEffect(() => {
    renderHouses();
    renderEmptyHouses();

    const allLetters = document.querySelectorAll('.letter') as NodeListOf<HTMLElement>;
    const allDropzones = document.querySelectorAll('.dropzone');

    if (allLetters) {
      allLetters.forEach((letter) => {
        letter.addEventListener('dragstart', dragStart);
        letter.addEventListener('dragend', dragEnd);
        letter.addEventListener("drag", function(event) {
          catchMousePosition(event, letter)
        });
        letter.addEventListener('touchstart', (e) => dragStartTouch(e, letter));
        letter.addEventListener('touchmove', (e) => dragTouch(e, letter));
        letter.addEventListener('touchend', () => dragEndTouch(letter));
      });
    }

    if (allDropzones)
      allDropzones.forEach((dropzone) => {
        dropzone.addEventListener('dragover', (e) => dragOver(e, dropzone));
        dropzone.addEventListener('dragleave', dragLeave);
        dropzone.addEventListener('drop', drop);
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
          <div className="line">{renderHouses()}</div>
          <div className="line">{renderEmptyHouses()}</div>
        </LessonLettersContentWrapper>
      </Container>
    </>
  );
};
