import { galleryItems } from './gallery-items.js';
const listImg = document.querySelector(".gallery");
let lightbox;
createImgList(galleryItems, listImg);

function createImgList(items, list) {
        const markup = items
                .map(item => {
                        return `
      <li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
      <img class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      title="${item.description}"/>
   </a>
      </li>`;
                })
                .join('');
        list.innerHTML = markup;
}
function maximizePhoto(event) {
        event.preventDefault();
         lightbox = new SimpleLightbox('.gallery a', { captionPosition: 'bottom', captionDelay: 250 });
}
listImg.addEventListener("click", maximizePhoto);

// document.addEventListener("keydown", (e) => {
//         if (e.key === "Escape") {
//                 // instance.close();
//         }
// });