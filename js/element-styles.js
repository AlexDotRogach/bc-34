'use strict';
//* Об'єкт style, cssText, classList

const btnRef = document.querySelectorAll('.js-modal-btn');
const backdropRef = document.querySelectorAll('.js-backdrop');

const paragraph = document.querySelector('.section__description');

// paragraph.style.color = 'red';

// paragraph.style.cssText = `
//     color: red;
//     font-size: 23px;
//     font-weight: 700;
// `;

// btnRef.forEach(btn => {
//   btn.addEventListener('click', e => {
//     const curModal = document.querySelector(`div[data-modal='${btn.dataset.modal}']`);
//     curModal.classList.add('is-backdrop-open');
//   });
// });
