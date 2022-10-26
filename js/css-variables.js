const listInputs = document.querySelectorAll('input');
const titleRef = document.querySelector('h2');

listInputs.forEach(input => {
  input.addEventListener('input', e => {
    const { name, value, dataset } = e.target;

    const suffix = dataset.sizing || '';

    document.documentElement.style.setProperty(`--${name}`, `${value}${suffix}`);
  });
});
