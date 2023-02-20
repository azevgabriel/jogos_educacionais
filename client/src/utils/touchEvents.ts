var currentX: number;
var currentY: number;
var initialX: number;
var initialY: number;
var xOffset = 0;
var yOffset = 0;

const dragStartTouch = (e: Event, el: HTMLElement) => {
  el.classList.add('is-dragging');
  el.parentElement?.classList.add('last-zone');

  let touchEvent = e as TouchEvent;
  xOffset = 0;
  yOffset = 0;
  currentX = 0;
  currentY = 0;
  initialX = touchEvent.touches[0].clientX - xOffset;
  initialY = touchEvent.touches[0].clientY - yOffset;
};

const dragTouch = (
  e: TouchEvent,
  el: HTMLElement,
  catchMousePosition: (e: TouchEvent, el: HTMLElement) => void
) => {
  catchMousePosition(e, el);
  e.preventDefault();
  let touchEvent = e as TouchEvent;
  currentX = touchEvent.touches[0].clientX - initialX;
  currentY = touchEvent.touches[0].clientY - initialY;
  xOffset = currentX;
  yOffset = currentY;
  setTranslate(currentX, currentY, el);
};

function dragEndTouch(
  el: HTMLElement,
  catchDropzoneModifier: (className: string) => void
) {
  const allDropzones = document.querySelectorAll('.dropzone');
  const cardBeingDraggedSize = el.getBoundingClientRect();

  for (let i = 0; i < allDropzones.length; i++) {
    const dropzone = allDropzones[i];
    const dropzoneSize = dropzone.getBoundingClientRect();

    if (dropzone.children.length === 0)
      if (
        el.parentElement &&
        el.parentElement.className !== dropzone.className
      ) {
        const posXCentralized =
          cardBeingDraggedSize.left +
          (cardBeingDraggedSize.right - cardBeingDraggedSize.left) / 2;
        const posYCentralized =
          cardBeingDraggedSize.top +
          (cardBeingDraggedSize.bottom - cardBeingDraggedSize.top) / 2;

        if (
          posXCentralized >= dropzoneSize.left &&
          posXCentralized <= dropzoneSize.right &&
          posYCentralized >= dropzoneSize.top &&
          posYCentralized <= dropzoneSize.bottom
        ) {
          dropzone.appendChild(el);
          catchDropzoneModifier(dropzone.className);
          break;
        }
      }
  }

  setTranslate(0, 0, el);

  el.classList.remove('is-dragging');
}

function setTranslate(xPos: number, yPos: number, el: HTMLElement) {
  el.style.transform = 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)';
}

export { dragStartTouch, dragTouch, dragEndTouch };
