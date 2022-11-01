'use strict';

const sectionList = document.querySelectorAll('.section');
const offsetElements = showElement();

sectionList.forEach(section => {
  section.style.background = getRandomHexColor();
});

const throttleHandleScroll = _.throttle(scrollControl, 500);

document.addEventListener('scroll', throttleHandleScroll);

function scrollControl() {
  for (const offsetElementKey in offsetElements) {
    if (window.pageYOffset > offsetElementKey) {
      offsetElements[offsetElementKey].classList.add('active');
    }
  }
}

function showElement() {
  const settingObj = {};

  for (const list of sectionList) {
    settingObj[list.offsetTop] = list;
  }

  return settingObj;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
