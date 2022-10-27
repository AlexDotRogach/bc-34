"use strict";

class Accordion {
  constructor(selector) {
    this.list = document.querySelector(selector);
    this.list.addEventListener("click", this.onBtnClick);
  }

  onBtnClick(e) {
    e.target.nextElementSibling.classList.toggle("active");
  }
}

const acordion1 = new Accordion(".js-accordion-list");
