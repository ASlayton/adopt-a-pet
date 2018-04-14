const buildDomString = require('./dom.js');

const xhr = () => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', ifFileLoads);
  myRequest.addEventListener('error', ifFileFails);
  myRequest.open('GET', '../db/pets.json');
  myRequest.send();
};

function ifFileLoads () {
  const myData = JSON.parse(this.response);
  console.log(myData);
  buildDomString(myData.pets);
};

function ifFileFails () {
  console.error('I have failed you, my friend.');
};

module.exports = xhr;
