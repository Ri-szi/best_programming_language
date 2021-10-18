function moveElements() {
  const elements = document.querySelectorAll('.element');
  elements.forEach((element) => {
    const classNumber = Number(element.classList[1].replace('_', ''));
    element.classList.add('_' + String(classNumber + 1));
    element.classList.remove('_' + String(classNumber));
  });
}

function createElement(container, txt) {
  const element = document.createElement('div');
  element.className = 'element _1';
  element.innerHTML = txt;
  container.appendChild(element);
}

function removeElement() {
  const element = document.querySelector('._5');
  if (element !== null) {
    element.remove();
  }
}

export { moveElements, createElement, removeElement };
