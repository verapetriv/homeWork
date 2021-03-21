import images from './gallery-items.js';

const refs = {
    gallery: document.querySelector('.js-gallery'),
    modal: document.querySelector('.js-lightbox'),
    largeImage: document.querySelector('.lightbox__image'),
    buttonCloseModal: document.querySelector('button[data-action="close-lightbox"]'),
    overlayModal: document.querySelector('.lightbox__overlay'),
};

const createImgCard = (linkImg, index) => {
    const listRef = document.createElement('li');
    const linkRef = document.createElement('a');
    const imageRef = document.createElement('img');

    listRef.classList.add('gallery__item');
    linkRef.classList.add('gallery__link');
    imageRef.classList.add('gallery__image');

    linkRef.href = linkImg.original;
    imageRef.src = linkImg.preview;
    imageRef.alt = linkImg.description;
    imageRef.setAttribute('data-source', linkImg.original);
    imageRef.setAttribute('data-index', index);

    linkRef.append(imageRef);
    listRef.append(linkRef);

    return listRef;
};

const imgCards = images.map((image, index) => createImgCard(image, index));

refs.gallery.append(...imgCards);

// Modal

refs.gallery.addEventListener('click', onGalleryClick);
refs.buttonCloseModal.addEventListener('click', onCloseModal);
refs.overlayModal.addEventListener('click', onCloseModal);

let nextIndex = null;

function onGalleryClick (event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const imageRef = event.target;
    const largeImageURL = imageRef.dataset.source;
    const descrImage = imageRef.alt;

    openModal();
    setLargeImageSrc(largeImageURL);
    setLargeImageAlt(descrImage);

}

function openModal () {
    refs.modal.classList.add('is-open');

    window.addEventListener('keydown', onPressESC);
    window.addEventListener('keydown', onArrowsClick);
}

function setLargeImageSrc (url) {
    refs.largeImage.src = url;

}

function setLargeImageAlt (descr) {
    refs.largeImage.alt = descr;
}

function onCloseModal () {
    refs.modal.classList.remove('is-open');

    refs.largeImage.src = '';
    refs.largeImage.alt = '';

    clearIndex();

    window.removeEventListener('keydown', onPressESC);
    window.removeEventListener('keydown', onArrowsClick);
}

function onPressESC (event) {
    if (event.code === 'Escape') {
        onCloseModal();
    }
}

function getIndex (event) {
    if (nextIndex === null) {
        const currentSmallImg = event.target.querySelector('.gallery__image');
        nextIndex = Number(currentSmallImg.dataset.index);
    } 
}

function setIndexUp () {
    nextIndex += 1;

    if (nextIndex === images.length) {
        nextIndex = 0;
    }
}

function setIndexDown () {
    nextIndex -= 1;

    if (nextIndex === -1) {
        nextIndex = images.length - 1;
    }
}

function clearIndex () {
    nextIndex = null;
}

function onArrowsClick (event) {
    getIndex(event);

    if (event.code === 'ArrowRight') {
        setIndexUp();
    }

    if (event.code === 'ArrowLeft') {
        setIndexDown();
    }

    const URLNextLargeImg = images[nextIndex].original;
    const DescrNextLargeImg = images[nextIndex].description;

    setLargeImageSrc(URLNextLargeImg);
    setLargeImageAlt(DescrNextLargeImg);
}