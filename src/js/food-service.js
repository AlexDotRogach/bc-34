import menu from './menu.json';
import { save, load } from './storage';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const THEME_STORAGE_KEY = 'theme';
const galleryRef = document.querySelector('.gallery');
const inputRef = document.querySelector('.theme-switch__toggle');

const initPage = () => {
  const savedChecked = load(THEME_STORAGE_KEY);
  inputRef.checked = savedChecked;
  document.body.className = savedChecked ? Theme.DARK : Theme.LIGHT;
};

initPage();

const onThemeSwitch = event => {
  const { checked } = event.target;

  document.body.className = checked ? Theme.DARK : Theme.LIGHT;
  save(THEME_STORAGE_KEY, checked);
};

inputRef.addEventListener('change', onThemeSwitch);

const markup = menu.map(({ image, name, price, description, ingredients }) => {
  return `<li class="menu__item">
    <article class="card">

        <img src="${image}" alt="${name}" class="card__image" />

        <div class="card__content">
            <h2 class="card__name">${name}</h2>
            <p class="card__price">
                <i class="material-icons"> monetization_on </i>
                ${price} кредитов
            </p>

            <p class="card__descr">
                ${description}
            </p>

            <ul class="tag-list">
${ingredients.map(elem => ` <li class="tag-list__item">${elem}</li>`).join('')}


            </ul>
        </div>

        <button class="card__button button">
            <i class="material-icons button__icon"> shopping_cart </i>
            В корзину
        </button>

    </article>
</li>`;
});

galleryRef.insertAdjacentHTML('beforeend', markup.join(''));
