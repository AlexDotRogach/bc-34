export default class ToDoList {
  #toDo = [];

  constructor(parent) {
    this.parent = parent;
  }

  addItem(newItem) {
    this.#toDo.push(newItem);
    this.render();
  }

  render() {
    // this.parent.insertAdjacentHTML(
    //   'beforend',
    //   this.#toDo.length === 0 ? 'no items' : createElement(this.#toDo)
    // );
    this.parent.innerHTML =
      this.#toDo.length === 0 ? 'no items' : createElement(this.#toDo);
  }
}

function createElement(arr) {
  return 'test';
}
