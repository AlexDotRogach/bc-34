// 'use strict';
const imgList = document.querySelectorAll('.gallery__img');
const bannerRef = document.querySelector('.banner__img');
const galleryRef = document.querySelector('.gallery');

imgList.forEach(img => {
  img.addEventListener(
    'load',
    event => {
      event.target.classList.add('appear');
    },
    { once: true }
  );
});

// if ('loadding' in HTMLImageElement.prototype) {
//   console.log('loading is working');
//   setSource();
// } else {
//   console.log('loading isn`t working');
//   createLazyScript();
// }

// function setSource() {
//   imgList.forEach(img => {
//     img.src = img.dataset.src;
//   });
// }

// function createLazyScript() {
//   const script = document.createElement('script');

//   script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';

//   script.setAttribute('crossorigin', 'anonymous');
//   script.setAttribute('referrerpolicy', 'no-referrer');
//   document.body.append(script);
// }

// function galleryClick({ target }) {
//   if (target.tagName !== 'IMG') return '';

//   bannerRef.src = target.dataset.bannerUrl;
// }

// galleryRef.addEventListener('click', galleryClick);
