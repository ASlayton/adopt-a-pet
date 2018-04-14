const writeToDom = (myInnerds, myElement) => {
  document.getElementById(myElement).innerHTML = myInnerds;
};

const buildDomString = (petArray) => {
  let myString = '';
  petArray.forEach(pet => {
    myString += `<div class="panel panel-default ${pet.type}">`;
    myString +=   `<div class="panel-heading">`;
    myString +=     `<h3 class="panel-title">${pet.name}</h3>`;
    myString +=   `</div>`;
    myString +=   `<div class="panel-body">`;
    myString +=     `<img src='${pet.imageUrl}'>`;
    myString +=     `<p>${pet.color}</p>`;
    myString +=     `<p>${pet.specialSkill}</p>`;
    myString +=   `</div>`;
    myString +=   `<div class="panel-footer">${pet.type}</div>`;
    myString += `</div>`;
  });
  writeToDom(myString, 'animal-container');
};

module.exports = buildDomString;
