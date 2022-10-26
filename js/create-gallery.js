'use strict';
const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

const listRef = document.querySelector('.js-gallery');

// const listItem = document.createElement('li');
// listItem.classList.add('gallery-item');
// const listLink = document.createElement('a');
// listLink.href = '#';
// const listImg = document.createElement('img');
// listImg.src = 'https://picsum.photos/id/237/200/300';
// listImg.alt = 'Labrador';

// listLink.append(listImg);
// listItem.append(listLink);
// listRef.append(listItem);

// v1
// const pictureElements = pictures.map(createElement);

// listRef.append(...pictureElements);

// function createElement({ width, height, url, alt }) {
//   const listItem = document.createElement('li');
//   listItem.classList.add('gallery-item');
//   const listLink = document.createElement('a');
//   listLink.href = '#';
//   const listImg = document.createElement('img');
//   listImg.src = url;
//   listImg.alt = alt;
//   // listImg.width = '300';
//   // listImg.height = '300';
//   // listImg.setAttribute('width', width);
//   // listImg.setAttribute('height', height);
//   // listItem.style.width = `${width}px`; // ${width}px
//   // listItem.style.height = height + 'px';

//   listLink.append(listImg);
//   listItem.append(listLink);

//   return listItem;
// }

// listRef.innerHTML = pictures.map(createElement).join('');

listRef.insertAdjacentHTML('beforeend', pictures.map(createElement).join(''));

function createElement({ width, height, url, alt }) {
  return `
    <li class="gallery-item" style="width: ${width}, height: ${height}">
      <a href="#">
        <img src=${url} alt=${alt}>
      </a>
    </li>
  `;
}
