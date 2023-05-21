import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGallery = document.querySelector(".gallery");

function initGallery(items) {
  let itemGallery = items.map((item) => {
    let itemEl = document.createElement("li");
    itemEl.classList.add("gallery__item");

    let linkEl = document.createElement("a");
    linkEl.classList.add("gallery__link");
    linkEl.href = item.original;

    let imgEl = document.createElement("img");
    imgEl.classList.add("gallery__image");
    imgEl.src = item.preview;
    imgEl.alt = item.description;
    imgEl.dataset.source = item.original;

    itemEl.appendChild(linkEl);
    linkEl.appendChild(imgEl);

    return itemEl;
  });
  listGallery.append(...itemGallery);
  console.log(itemGallery);
}

listGallery.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  let clickedItemEl = event.target;
  if (clickedItemEl.nodeName !== 'IMG') {
    return clickedItemEl;
  }

  let bigImg = clickedItemEl.dataset.source;
  openBigImg(bigImg);
}

function openBigImg(imgUrl){
  const instance = basicLightbox.create(
    `<img src="${imgUrl}" width="800" height="600">`
)
instance.show();
}
initGallery(galleryItems);

