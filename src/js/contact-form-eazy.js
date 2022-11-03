'use strict';
import { save, load, remove, clear } from './storage';
import throttle from 'lodash.throttle';
import { Notify } from 'notiflix';

const form = document.querySelector('.js-contact-form');
const FORM_STORAGE_KEY = 'form-storage-key';
let userData = {};

if (load('form-storage-key')) {
  userData = load('form-storage-key');

  for (const key in userData) {
    form.elements[key].value = userData[key];
  }
}

function formInput(e) {
  console.log('work');
  const { name, value } = e.target;
  userData[name] = value;

  save(FORM_STORAGE_KEY, userData);
}

function formSubmit(e) {
  e.preventDefault();

  const {
    elements: {
      name: { value: nameValue },
      email: { value: emailValue },
      message: { value: messageValue },
    },
  } = e.currentTarget;

  if (nameValue && emailValue && messageValue) {
    const formData = new FormData(e.currentTarget);

    e.currentTarget.reset();
    remove(FORM_STORAGE_KEY);
  } else {
    Notify.info('Please write a value', {
      timeout: 20000,
    });
  }
}
const throttleFormInput = throttle(formInput, 500);

form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttleFormInput);
