import { createPhotos } from './create-photos.js';
const container = document.querySelector('.pictures');
const similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarPhotos = createPhotos();
const similarListFragment = document.createDocumentFragment();

similarPhotos.forEach(({ url, description, likes, comments }) => {
  const photoElement = similarPhotoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__comments').textContent = comments;
  photoElement.querySelector('.picture__likes').textContent = likes;
  similarListFragment.appendChild(photoElement);
});

container.appendChild(similarListFragment);

