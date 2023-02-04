function dragLeave(dropzone: HTMLElement) {
  dropzone.classList.remove('over');
  dropzone.classList.remove('not-over');
}

function drop(
  dropzone: HTMLElement,
  catchDropzoneModifier: (className: string) => void
) {
  if (dropzone.classList.contains('over')) {
    const cardBeingDragged = document.querySelector('.is-dragging');
    if (!cardBeingDragged) return;
    dropzone.appendChild(cardBeingDragged);
    dropzone.classList.remove('over');

    catchDropzoneModifier(dropzone.className);
  }

  dropzone.classList.remove('not-over');
}

function dragOver(e: Event, el: HTMLElement) {
  e.preventDefault();
  const cardBeingDragged = document.querySelector('.is-dragging');
  const lastZone = document.querySelector('.last-zone');

  if (el.children[0] && el.children[0] !== cardBeingDragged) {
    el.classList.add('not-over');
    if (cardBeingDragged && lastZone) {
      lastZone.appendChild(cardBeingDragged);
      lastZone.classList.remove('last-zone');
    }
  } else {
    el.classList.add('over');
  }

  return false;
}

export { dragLeave, drop, dragOver };
