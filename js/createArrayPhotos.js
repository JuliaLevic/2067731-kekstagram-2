import { getRandomInteger, getRandomElement } from './util.js';
import { getDataArrayPhotos } from './data.js';

const MAX_OBJECT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_NUMBER_AVATAR = 1;
const MAX_NUMBER_AVATAR = 6;
const { NAMES, DESCRIPTIONS, MESSAGES } = getDataArrayPhotos();

//Количество комментариев
const numComments = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);


//Объект комментатора

const createComment = () => ({
  id: getRandomInteger(1, 10000),
  avatar: `img/avatar-${getRandomInteger(MIN_NUMBER_AVATAR, MAX_NUMBER_AVATAR)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

//Объект фотографии

const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({ length: numComments }, createComment),
});

//Создаем массив
const createArrayPhotos = () => Array.from({ length: MAX_OBJECT }, (v, i) => createPhoto(i + 1));

export { createArrayPhotos };
