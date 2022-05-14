import { useEffect, useState } from 'react';
import { Container } from './styles';

interface DropzoneProps {
  children?: React.ReactNode;
  numberOfLetters: number;
}

export const Dropzone = ({ children, numberOfLetters }: DropzoneProps) => {
  const [letter, setLetter] = useState<Element | null>(null);
  const [dropzone, setDropzome] = useState<Element | null>(null);

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
    const letter = document.querySelector('.letter');
    const dropzone = document.querySelector('.dropzone');

    if (letter) setLetter(letter);
    if (dropzone) setDropzome(dropzone);
  }, []);

  useEffect(() => {
    if (letter) {
      letter.addEventListener('dragstart', dragstart);
      letter.addEventListener('dragend', dragend);
    }

    if (dropzone) {
      dropzone.addEventListener('dragover', dragover);
      dropzone.addEventListener('dragleave', dragleave);
      dropzone.addEventListener('drop', drop);
    }
  }, [letter, dropzone]);

  return (
    <Container className="dropzone" numberOfLetters={numberOfLetters}>
      {children}
    </Container>
  );
};
