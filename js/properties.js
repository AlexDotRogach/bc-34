'use strict';
//* Атрибути як властивості об'єкту

// https://picsum.photos/200/300

/*
 * Доступ до атрибутів
 *
 * elem.hasAttribute(name)
 * elem.getAttribute(name)
 * elem.setAttribute(name, value)
 * elem.removeAttribute(name)
 * elem.attributes
 */

const titleRef = document.querySelector('.js-hero__title');
const imgRef = document.querySelector('[alt="Labrador"]');
const swapBtn = document.querySelector('[data-swap="false"]');
const saveBtn = document.querySelector('[data-action="save"]');
const closeBtn = document.querySelector('[data-action="close"]');

closeBtn.addEventListener('click', () => {
  saveBtn.removeAttribute('disabled');
  closeBtn.setAttribute('disabled', '');
});

saveBtn.addEventListener('click', () => {
  closeBtn.removeAttribute('disabled');
  saveBtn.setAttribute('disabled', '');
});

swapBtn.addEventListener('click', () => {
  imgRef.src = 'https://picsum.photos/200/300';
});

imgRef.style.width = '200px';

console.log(imgRef.style.width);
