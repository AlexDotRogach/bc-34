import heroes from './heroes.json';
import { save, load, remove, clear } from './storage';

const galleryRef = document.querySelector('.js-heroes-list');
console.log(heroes);
galleryRef.insertAdjacentHTML('beforeend', heroes.map(createHTML).join(''));

// local storage

if (load('heroes')) {
  for (const hero of galleryRef.children) {
    const heroesObj = load('heroes');

    for (const key in heroesObj) {
      if (key === hero.id && heroesObj[key]) {
        hero.classList.add('heroes__item_active');
      }
    }
  }
} else {
  save('heroes', {});
}

// end local storage

//click

galleryRef.addEventListener('click', cardClick);

function cardClick(e) {
  if (e.target.tagName !== 'IMG') return '';

  const {
    target: { parentElement: parent },
  } = e;

  if (parent.classList.contains('heroes__item_active')) {
    parent.classList.remove('heroes__item_active');

    controlHero(false, parent.id);
    return '';
  }

  parent.classList.add('heroes__item_active');
  controlHero(true, parent.id);
}

function controlHero(state, id) {
  const heroesObj = load('heroes');
  heroesObj[id] = state;
  save('heroes', heroesObj);
}

//click end

function createHTML({
  id,
  name,
  images: { md: url },
  appearance: { gender },
  biography: { alterEgos },
}) {
  return `<li class="heroes__item" id=${id}>
    <img src="${url}" alt="${name}" class="heroes__picture">
    <div class="heroes__content">
        <h2 class="heroes__name">${name}</h2>
        <ul class="heroes__biography list">
            <li class="heroes__biography-item"><p class="heroes__gender"><strong>Gender: </strong> ${gender}</p></li>
            <li class="heroes__biography-item"><p class="heroes__alter-egos"><strong>Alter Egos: </strong> ${alterEgos}</p></li>
        </ul>
    </div>
    </li>`;
}
