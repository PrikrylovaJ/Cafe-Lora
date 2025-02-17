import './style.css';

import { Drink} from './Drink/index'


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

// const objElm = document.querySelector('.order-btn');
// const drinkElm = document.querySelector('.drink__cup');
// let ordered = false;

// const order = () => {
//     if (ordered === false) {
//     console.log('objednat');
//     drinkElm.classList.toggle('drink__cup--selected');
//     objElm.textContent = "Zrušit";
//     ordered = true;
//   } else {
//     console.log('zrusit');
//     drinkElm.classList.toggle('drink__cup--selected');
//     objElm.textContent = "Objednat";
//     ordered = false;
//   }
// }

// objElm.addEventListener('click', order);

// --------------------Layer------------------------------------------

  const layerElm = document.querySelector('.drink__info');
  // layerElm.innerHTML += Layer({color: '#feeeca', label: 'mléčná pěna',})
  // layerElm.innerHTML += Layer({color: '#fed7b0', label: 'teplé mléko',})
  // layerElm.innerHTML += Layer({color: '#613916', label: 'espresso',})

// -----------------------Seznam ingredienci---------------------------

// const layers = [
//   {
//     color: '#feeeca',
//     label: 'mléčná pěna',
//   },
//   {
//     color: '#fed7b0',
//     label: 'teplé mléko',
//   },
//   {
//     color: '#613916',
//     label: 'espresso',
//   },
// ];

// for (let i = 0; i < layers.length; i++) {
//   layerElm.innerHTML += Layer(layers[i]);
// }

// ----------------------Komponenta Drink----------------

// const drink = {
//   id: 'romano',
//   name: 'Romano',
//   ordered: false,
//   layers: [
//     {
//       color: '#fbdf5b',
//       label: 'citrón',
//     },
//     {
//       color: '#613916',
//       label: 'espresso',
//     },
//   ],
// };

// const drinksListElm = document.querySelector('.drinks-list');
// drinksListElm.appendChild(Drink(drink));

// ------------------- seznam nápojů --------------------

// const drinks = [
//   {
//     id: 'cappuccino',
//     name: 'Cappuccino',
//     ordered: false,
//     layers: [
//       {
//         color: '#feeeca',
//         label: 'mléčná pěna',
//       },
//       {
//         color: '#fed7b0',
//         label: 'teplé mléko',
//       },
//       {
//         color: '#613916',
//         label: 'espresso',
//       },
//     ],
//   },
//   {
//     id: 'romano',
//     name: 'Romano',
//     ordered: false,
//     layers: [
//       {
//         color: '#fbdf5b',
//         label: 'citrón',
//       },
//       {
//         color: '#613916',
//         label: 'espresso',
//       },
//     ],
//   },
// ];



// for (let i = 0; i < drinks.length; i +=1) {
//   document.querySelector('.drinks-list').appendChild(Drink(drinks[i]));
// }

// ---------------Backend---------------------------------

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => response.json())
  .then((drinks) => {
  for (let i = 0; i < drinks.length; i +=1) {
  document.querySelector('.drinks-list').appendChild(Drink(drinks[i]));
    }
  });