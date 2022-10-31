'use strict';
//false, 0, undefined, "", null, NaN

const calendarRef = document.querySelector('.calendar');

function onCalendarClick(e) {
  const { target: tar } = e;

  if (tar.tagName !== 'TD' || tar.textContent === '') return '';

  const activeId = document.querySelector('.active');

  //   if (activeId === tar) {
  //     activeId.classList.remove('active');
  //     return;
  //   }

  if (activeId) {
    activeId.classList.remove('active');
  }

  //   tar.classList.add('active');

  tar.classList.toggle('active');
}

calendarRef.addEventListener('click', onCalendarClick);
