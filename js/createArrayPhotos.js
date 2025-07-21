import { getRandomInteger, getRandomElement, getUnicalInteger } from './util.js';
import { getDataArrayPhotos } from './data.js';

const MAX_OBJECT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_NUMBER_AVATAR = 1;
const MAX_NUMBER_AVATAR = 6;
const MIN_ID_COMMENT = 1;
const MAX_ID_COMMENT = 1000;
const MIN_ID_PHOTO = 1;
const MAX_ID_PHOTO = 25;
const MIN_NUMBER_PHOTO=1;
const MAX_NUMBER_PHOTO=25;
const { NAMES, DESCRIPTIONS, MESSAGES } = getDataArrayPhotos();


//Id комментария
const getIdComment = getUnicalInteger(MIN_ID_COMMENT, MAX_ID_COMMENT,)

//Id фото
const getIdPhoto = getUnicalInteger(MIN_ID_PHOTO, MAX_ID_PHOTO,)

//Номер фото
const getNumberPhoto = getUnicalInteger(MIN_NUMBER_PHOTO, MAX_NUMBER_PHOTO,)


//Объект комментатора

const createComment = () => ({
  id: getIdComment(),
  avatar: `img/avatar-${getRandomInteger(MIN_NUMBER_AVATAR, MAX_NUMBER_AVATAR)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

//Объект фотографии

const createPhoto = () => ({
  id: getIdPhoto(),
  url: `photos/${getNumberPhoto()}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({ length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS) }, createComment),
});

//Создаем массив
const createArrayPhotos = () => Array.from({ length: MAX_OBJECT }, createPhoto);

export { createArrayPhotos };
