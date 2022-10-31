'use strict';

const palletItemsRef = document.querySelectorAll('.pallet__item');
const palletListRef = document.querySelector('.js-pallet');

palletItemsRef.forEach(item => setColorAndText(item));

const calendarRef = document.querySelector('.calendar');

function onPalletClick(e) {
  const { target: tar } = e;

  if (tar.tagName !== 'LI') return '';

  const activeId = document.querySelector('.active');

  if (activeId) {
    activeId.classList.remove('active');
  }

  setColorAndText(tar);
  tar.classList.toggle('active');
}

palletListRef.addEventListener('click', onPalletClick);

function setColorAndText(elem) {
  const setObj = {
    color: getRandomHexColor(),
    span: elem.firstElementChild,
  };

  elem.style.background = setObj.color;
  setObj.span.textContent = setObj.color;
  setObj.span.style.color = setObj.color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
