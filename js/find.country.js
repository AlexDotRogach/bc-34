'use strict';
const countries = [
  {
    name: 'Ukraine',
    capital: 'Kyiv',
    population: '41 342 465',
    area: '603.628',
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    population: '47 450 795',
    area: '505.990',
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    population: '109 035 343',
    area: '300.000',
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    population: '31 127 674',
    area: '1.246.700',
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    population: '34 003',
    area: '6.8',
  },
];

const inputRef = document.querySelector('.search-input');
const listRef = document.querySelector('.country-card ');
const outputErrorRef = document.querySelector('.output-error');

const handelInput = event => {
  const { value } = event.target;
  const normalizeInput = value.trim().toLowerCase();

  if (!normalizeInput) {
    setErrorText('');
    setListHTML('');
    return;
  }
  const findCountri = countries.filter(({ name }) => {
    return name.toLowerCase().includes(normalizeInput);
  });

  if (findCountri.length > 1) {
    setErrorText('');

    const markup = createCountriList(findCountri).join('');
    setListHTML(markup);
  } else if (findCountri.length === 1) {
    setErrorText('');

    const countryMarkup = createCountriInfo(findCountri);
    setListHTML(countryMarkup);
  } else {
    setErrorText(`${normalizeInput} not found!!!`);
    setListHTML('');
  }
};
const throttleHandleInput = _.throttle(handelInput, 500);
inputRef.addEventListener('input', throttleHandleInput);

function createCountriList(countries) {
  return countries.map(
    ({ name, capital }) =>
      `<li>
  <h5> Country name: ${name}</h5>
  <p>Country capital: ${capital}</p>
  </li>`
  );
}

function createCountriInfo([country]) {
  const { name, capital, population, area } = country;
  return /*html */ `<li>
  <h3> Country name: ${name}</h3>
  <p>Country capital: ${capital}</p>
  <p>population: ${population}</p>
  <p>area: ${area}</p>
  </li>`;
}

function setListHTML(string) {
  listRef.innerHTML = string;
}

function setErrorText(text) {
  outputErrorRef.textContent = text;
}
