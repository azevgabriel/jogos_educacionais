function dragStart(el: HTMLElement) {
  el.classList.add('is-dragging');
  el.parentElement?.classList.add('last-zone');
}

function dragEnd(el: HTMLElement) {
  el.classList.remove('is-dragging');
}

export { dragStart, dragEnd };
