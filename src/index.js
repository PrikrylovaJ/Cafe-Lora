import './style.css';

console.log('funguju!');

// -------------------Navigace----------------------

const btnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');

btnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
})

const aElements = document.querySelectorAll('a');

const navigace = () => {
  const navElm = document.querySelector('nav');
  navElm.classList.toggle('nav-closed');
}

for (let i = 0; i < aElements.length; i++) {
  const aElm = aElements[i];
  aElm.addEventListener('click', navigace);
}

// ---------------------Objednávání  nápoje-----------------------------

const objElm = document.querySelector('.order-btn');
const drinkElm = document.querySelector('.drink__cup');
let ordered = false;

const order = () => {
    if (ordered === false) {
    console.log('objednat');
    drinkElm.classList.toggle('drink__cup--selected');
    objElm.textContent = "Zrušit";
    ordered = true;
  } else {
    console.log('zrusit');
    drinkElm.classList.toggle('drink__cup--selected');
    objElm.textContent = "Objednat";
    ordered = false;
  }
}

objElm.addEventListener('click', order);