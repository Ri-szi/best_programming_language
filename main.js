import data from './data.js';
import { moveElements, createElement, removeElement } from './elements.js';
import { timer, getRandomArbitrary } from './helper.js';

const btn = document.querySelectorAll('button');
const container = document.querySelector('.processing');
const welcome = document.querySelector('.intro');
const result = document.querySelector('.result');

const tempData = [];
const max = data.length * 2;
let i = 1;

do {
  data.forEach((element) => {
    tempData.push(element);
    i++;
  });
} while (i < max);

async function action() {
  welcome.classList.add('invisible');
  result.classList.add('invisible');
  container.classList.remove('invisible');
  for (let i = 0; i < getRandomArbitrary(data.length, max); i++) {
    removeElement();
    moveElements();
    createElement(container, tempData[i]);
    await timer(70);
  }

  const picked = document.querySelector('._3').innerText;
  const winner = document.querySelector('.winner');
  winner.innerText = `Your destiny is ${picked}`;

  await timer(2000);
  container.classList.add('invisible');
  result.classList.remove('invisible');
}

btn.forEach((button) => {
  button.addEventListener('click', action);
});
