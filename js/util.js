// Функция получения случайного числа из заданного диапазона

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Функция получения уникального числа из заданного диапазона

const getUnicalInteger = (min, max) => {
  const previousValues = [];
  return () => {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= max - min + 1) {
      console.log('У меня больше нет уникальных значений!');
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue
  };
};



const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export { getRandomInteger, getRandomElement, getUnicalInteger };
