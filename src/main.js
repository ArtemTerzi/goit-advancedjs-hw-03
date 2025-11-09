import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchPhotosByQuery } from './js/pixabay-api';
import { createGalleryMarkup } from './js/render-functions';

const refs = {
  galleryEl: document.querySelector('.gallery'),
  inputEl: document.querySelector('.controller-input'),
  formEl: document.querySelector('.controller'),
  loaderEl: document.querySelector('.loader'),
};

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 250,
  scrollZoom: false,
});

const toastConfig = {
  title: 'Error',
  message:
    'Sorry, there are no images matching your search query. Please try again!',
  position: 'topRight',
};

const toggleLoader = () => refs.loaderEl.classList.toggle('is-active');

const handleClick = e => {
  e.preventDefault();
  refs.galleryEl.innerHTML = '';
  toggleLoader();

  const q = refs.inputEl.value.trim();
  refs.inputEl.value = '';

  if (q.length === 0) {
    iziToast.error(toastConfig);
    toggleLoader();
    return;
  }

  fetchPhotosByQuery(q)
    .then(data => {
      if (data.hits.length === 0) throw new Error(message);

      refs.galleryEl.innerHTML = createGalleryMarkup(data.hits);
      gallery.refresh();
    })
    .catch(err => {
      iziToast.error(toastConfig);
      console.dir(err);
    })
    .finally(() => toggleLoader());
};

refs.formEl.addEventListener('submit', handleClick);
