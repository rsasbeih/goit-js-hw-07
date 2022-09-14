import { galleryItems } from './gallery-items.js';
const listImg = document.querySelector(".gallery");
import * as basicLightbox from 'basiclightbox';
createImgList(galleryItems, listImg);

function createImgList(items, list) {
  const markup = items
    .map(item => {
      return `
      <li class="gallery__item">
      <img class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"/>
      </li>`;
    })
    .join('');
  list.innerHTML = markup;
}
function maximizePhoto(event) {
  const selectedImg = event.target;
  // console.log(selectedImg.dataset.original);
  const instance = basicLightbox.create(`
    <img src="${selectedImg.dataset.original}" width="800" height="600">
`);

  instance.show();
}
listImg.addEventListener("click", maximizePhoto);

