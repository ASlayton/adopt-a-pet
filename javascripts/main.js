const xhr = require('./pets.js');
const initEventListeners = require('./events.js');

const startApp = () => {
  xhr();
  initEventListeners();
};

startApp();
