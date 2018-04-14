const initEventListeners = () => {
  const button1 = document.getElementById('cat-btn');
  const button2 = document.getElementById('dog-btn');
  const button3 = document.getElementById('dino-btn');
  const button4 = document.getElementById('refresh-btn');
  button1.addEventListener('click', sortCats);
  button2.addEventListener('click', sortDogs);
  button3.addEventListener('click', sortDinos);
  button4.addEventListener('click', refreshPets);
};

const sortCats = () => {
  const myCats = document.getElementsByClassName('cat');
  const myDogs = document.getElementsByClassName('dog');
  const myDinos = document.getElementsByClassName('dino');
  const myRefresh = document.getElementById('refresh-btn');
  if (myRefresh.classList.contains('hidden')) {
    myRefresh.classList.remove('hidden');
  };
  for (let k = 0; k < myCats.length; k++) {
    if (myCats[k].classList.contains('hidden')) {
      myCats[k].classList.remove('hidden');
    };
  };
  for (let i = 0; i < myDogs.length; i++) {
    if (!(myDogs[i].classList.contains('hidden'))) {
      myDogs[i].classList.add('hidden');
    };
  };
  for (let n = 0; n < myDinos.length; n++) {
    if (!(myDinos[n].classList.contains('hidden'))) {
      myDinos[n].classList.add('hidden');
    };
  };
};

const sortDogs = () => {
  const myCats = document.getElementsByClassName('cat');
  const myDogs = document.getElementsByClassName('dog');
  const myDinos = document.getElementsByClassName('dino');
  const myRefresh = document.getElementById('refresh-btn');
  if (myRefresh.classList.contains('hidden')) {
    myRefresh.classList.remove('hidden');
  };
  for (let k = 0; k < myDogs.length; k++) {
    if (myDogs[k].classList.contains('hidden')) {
      myDogs[k].classList.remove('hidden');
    };
  };
  for (let i = 0; i < myCats.length; i++) {
    if (!(myCats[i].classList.contains('hidden'))) {
      myCats[i].classList.add('hidden');
    };
  };
  for (let n = 0; n < myDinos.length; n++) {
    if (!(myDinos[n].classList.contains('hidden'))) {
      myDinos[n].classList.add('hidden');
    };
  };
};

const sortDinos = () => {
  const myCats = document.getElementsByClassName('cat');
  const myDogs = document.getElementsByClassName('dog');
  const myDinos = document.getElementsByClassName('dino');
  const myRefresh = document.getElementById('refresh-btn');
  if (myRefresh.classList.contains('hidden')) {
    myRefresh.classList.remove('hidden');
  };
  for (let k = 0; k < myDinos.length; k++) {
    if (myDinos[k].classList.contains('hidden')) {
      myDinos[k].classList.remove('hidden');
    };
  };
  for (let i = 0; i < myDogs.length; i++) {
    if (!(myDogs[i].classList.contains('hidden'))) {
      myDogs[i].classList.add('hidden');
    };
  };
  for (let n = 0; n < myCats.length; n++) {
    if (!(myCats[n].classList.contains('hidden'))) {
      myCats[n].classList.add('hidden');
    };
  };
};

const refreshPets = () => {
  const myCats = document.getElementsByClassName('cat');
  const myDogs = document.getElementsByClassName('dog');
  const myDinos = document.getElementsByClassName('dino');
  const myRefresh = document.getElementById('refresh-btn');
  myRefresh.classList.add('hidden');
  for (let k = 0; k < myDinos.length; k++) {
    if (myDinos[k].classList.contains('hidden')) {
      myDinos[k].classList.remove('hidden');
    };
  };
  for (let i = 0; i < myDogs.length; i++) {
    if (myDogs[i].classList.contains('hidden')) {
      myDogs[i].classList.remove('hidden');
    };
  };
  for (let n = 0; n < myCats.length; n++) {
    if (myCats[n].classList.contains('hidden')) {
      myCats[n].classList.remove('hidden');
    };
  };
};

module.exports = initEventListeners;
