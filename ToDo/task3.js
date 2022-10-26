import task3 from './task3.css';

const refs = {
  btnAdd: document.querySelector('.submit'),
  input: document.querySelector('#formInput'),
  items: document.querySelector('.items'),
};

class ToDoList {
  static createHtml(arr) {
    return arr.map(item => {
      const newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.innerHTML = `
        <div class="text">${item}</div>
        <button class="delete">remove</button>
      `;
      return newItem;
    });
  }

  #toDo = [];

  constructor(parent) {
    this.parent = parent;
  }

  addItem(newItem) {
    if (this.#toDo.includes(newItem)) {
      console.log('is in list');
      return;
    }

    this.#toDo.push(newItem);
    this.render();
  }

  removeItem({ target }) {
    const curItem = target.previousElementSibling.textContent;
    this.#toDo.splice(this.#toDo.indexOf(curItem), 1);

    this.render();
  }

  render() {
    this.parent.innerHTML = '';
    this.parent.append(...ToDoList.createHtml(this.#toDo));

    document.querySelectorAll('.delete').forEach(item => {
      item.addEventListener('click', deleteItem);
    });
  }
}

const myList = new ToDoList(refs.items);

myList.render();

refs.btnAdd.addEventListener('click', e => createItem(e, refs.input, myList));

function createItem(e, { value }, myList) {
  e.preventDefault();
  myList.addItem(value);
}

function deleteItem(e) {
  myList.removeItem(e);
}

// 1. Отримати всі елементи +
// 2. Потрібно зробити класс +
//   1. додавати +
//   2. видаляти
//   3. робити рендер списку
// 3. потрібно реалізувати механізм додавання елментів до списку
