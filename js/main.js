'use strict';

var TYPE = [
  'palace',
  'flat',
  'house',
  'bungalo'
];
var CHECKIN_TIME = [
  '12:00',
  '13:00',
  '14:00'
];
var CHECKOUT_TIME = [
  '12:00',
  '13:00',
  '14:00'
];
var FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
var PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];
var POSITION_X_MIN = 0;
var POSITION_X_MAX = 1200;
var POSITION_Y_MIN = 130;
var POSITION_Y_MAX = 630;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArrayLength(arr) {
  var arrayLength = getRandomInt(0, arr.length);
  return arr.slice(0, arrayLength);
}

function getRandomElement(arr) {
  var element = getRandomInt(0, arr.length - 1);
  return arr(element);
}

var cards = [];
for (var i = 0; i < 8; i++) {
  cards[i] = {
    author: {
      avatar: 'img/avatars/user0' + (i + 1).toString() + '.png'
    },
    offer: {
      title: 'заголовок предложения',
      address: '600, 350',
      price: 1000,
      type: getRandomElement(TYPE),
      rooms: 2,
      guests: 2,
      checkin: getRandomElement(CHECKIN_TIME),
      checkout: getRandomElement(CHECKOUT_TIME),
      features: getRandomArrayLength(FEATURES),
      description: 'описание',
      photos: getRandomArrayLength(PHOTOS)
    },
    location: {
      x: getRandomInt(POSITION_X_MIN, POSITION_X_MAX),
      y: getRandomInt(POSITION_Y_MIN, POSITION_Y_MAX)
    }
  };
}

var map = document.querySelector('.map');

map.classList.remove('map--faded');

var cardsTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
var fragment = document.createDocumentFragment();

for (var j = 0; j < 8; j++) {
  var cardsElement = cardsTemplate.cloneNode(true);
  cardsElement.style.left = cards[j].location.x + 'px';
  cardsElement.style.top = cards[j].location.y + 'px';
  cardsElement.setAttribute('src', cards[j].author.avatar);
  cardsElement.setAttribute('alt', cards[j].offer.title);

  fragment.appendChild(cardsElement);
}

var listElement = document.querySelector('map__pins');

listElement.appendChild(fragment);

