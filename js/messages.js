'use strict';

const refs = {
  add: document.querySelector('.list-control-add'),
  remove: document.querySelector('.list-control-remove'),
  list: document.querySelector('.js-messages-wrapper'),
};

class ControlText {
  static addInList(arr, parent) {
    arr.forEach((elem, index) => {
      parent.append(arr[index]);
    });

    return [];
  }

  #deleteElements = [];

  constructor(parent) {
    this.parent = document.querySelector(parent);
    this.elements = document.querySelectorAll('.message');
  }

  onListClick(e) {
    const { target: tar } = e;

    if (!tar.classList.contains('message__close-btn')) return '';

    this.#deleteElements.push(tar.parentElement);

    tar.parentElement.remove();
  }

  addListItem() {
    if (this.#deleteElements.length === 0) {
      console.log('no data');
      return '';
    }

    this.#deleteElements = ControlText.addInList(this.#deleteElements, this.parent);
  }
}

const controlText = new ControlText('.messages-wrapper');

refs.list.addEventListener('click', controlText.onListClick.bind(controlText));
refs.add.addEventListener('click', controlText.addListItem.bind(controlText));
