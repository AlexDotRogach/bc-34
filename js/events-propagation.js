'use strict';
/*
 * Поширення подій (занурення, таргетинг, спливання)
 */

// https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener

const sectionRef = document.querySelector('.section');
const divRef = document.querySelector('.div');
const textRef = document.querySelector('.text');

document.addEventListener(
  'click',
  e => {
    console.log('hello from document');
    e.target.style.background = 'yellow';
  },
  true
);

sectionRef.addEventListener(
  'click',
  e => {
    console.log('hello from section');
    e.target.style.background = 'green';
  },
  true
);

divRef.addEventListener(
  'click',
  e => {
    console.log('hello from div');
    e.target.style.background = 'red';
  },
  true
);

textRef.addEventListener(
  'click',
  e => {
    console.log('hello from p');
    e.target.style.background = 'black';
  },
  true
);
