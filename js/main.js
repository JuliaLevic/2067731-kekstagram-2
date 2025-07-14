//Вводные данные

const NAMES = ['Артем', 'Юля', 'Павел', 'Настя', 'Света', 'Олег', 'Илья', 'Наташа', 'Иван', 'Никита'];

const DESCRIPTIONS = ['Вкусный обед.', 'Отдых на море.', 'Красивая машина.', 'Закат солнца.', 'Музыкальный театр.', 'Портрет девушки.'];

const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];

const MAX_OBJECT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_NUMBER_PHOTO = 1;
const MAX_NUMBER_PHOTO = 25;
const MIN_ID_PHOTO = 1;
const MAX_ID_PHOTO = 25;
const MIN_NUMBER_AVATAR = 1;
const MAX_NUMBER_AVATAR = 6;


// Функция получения случайного числа из заданного диапазона

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];



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
  comments: Array.from({ length: MAX_COMMENTS }, createComment),
});

//Создаем массив
const arrayPhotos = Array.from({ length: MAX_OBJECT }, (v, i) => createPhoto(i + 1));
console.log(arrayPhotos);
