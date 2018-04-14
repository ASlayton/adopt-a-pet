const initEventListeners = () => {
  const button1 = document.getElementById('cat-btn');
  const button2 = document.getElementById('dog-btn');
  const button3 = document.getElementById('dino-btn');
  button1.addEventListener('click', sortCats);
  button2.addEventListener('click', sortDogs);
  button3.addEventListener('click', sortDinos);
};

const sortCats = () => {
  const myCats = document.getElementsByClassName('cat');
  const myDogs = document.getElementsByClassName('dog');
  const myDinos = document.getElementsByClassName('dino');
  myCats.classList.remove('hidden');
  myDogs.classList.add('hidden');
  myDinos.classList.add('hidden');
};

const sortDogs = () => {
  const myCats = document.getElementsByClassName('cat');
  const myDogs = document.getElementsByClassName('dog');
  const myDinos = document.getElementsByClassName('dino');
  myCats.classList.add('hidden');
  myDogs.classList.remove('hidden');
  myDinos.classList.add('hidden');
};

const sortDinos = () => {
  const myCats = document.getElementsByClassName('cat');
  const myDogs = document.getElementsByClassName('dog');
  const myDinos = document.getElementsByClassName('dino');
  myCats.classList.add('hidden');
  myDogs.classList.add('hidden');
  myDinos.classList.remove('hidden');
};

module.exports = initEventListeners;
