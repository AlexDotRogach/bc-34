'use strict';
/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

const listRef = document.querySelector('.js-gallery');

const listItem = document.createElement('li');
listItem.classList.add('gallery-item');
const listLink = document.createElement('a');
listLink.href = '#';
const listImg = document.createElement('img');
listImg.src = 'https://picsum.photos/id/237/200/300';
listImg.alt = 'Labrador';

listLink.append(listImg);
listItem.append(listLink);
listRef.append(listItem);
