import { Layer } from '../Layer/index.js';
import './style.css';

export const Drink = (props) => {
  let layersHtml = '';
  for (let i = 0; i < props.layers.length; i++) {
    layersHtml += Layer(props.layers[i]);
  }

  const element = document.createElement('div');
  element.classList.add('drink');
  element.innerHTML = `
  <div class="drink__product">
  <div class="drink__cup">
    <img src="/assets/cups/${props.id}.png" />
  </div>
  <div class="drink__info">
    <h3>${props.name}</h3>
    ${layersHtml}
  <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div>`

  return element;
};








// const Drink = (props) => {
//   const drinkElm = document.createElement('div');
//   drinkElm.classList.add('drink');
//   const drinkProductElm = document.createElement('div');
//   drinkProductElm.classList.add('drink__product');
//   drinkElm.appendChild(drinkProductElm);
//   const drinkCupElm = document.createElement('div');
//   drinkCupElm.classList.add('drink__cup');
//   drinkProductElm.appendChild(drinkCupElm);
//   const imgElm = document.createElement('img');
//   imgElm.src = `/assets/cups/${props.id}.png`
//   drinkCupElm.appendChild(imgElm);
//   const drinkInfoElm = document.createElement('div');
//   drinkInfoElm.classList.add('drink__info');
//   drinkProductElm.appendChild(drinkInfoElm);
//   const h3Elm = document.createElement('h3');
//   h3Elm.textContent = props.name;
//   drinkInfoElm.appendChild(h3Elm);


//   for (let i = 0; i < layers.length; i++) {
//     layerElm.innerHTML += Layer(layers[i]);
//   }

//   const drinkControlsElm = element.createElement('div');
//   drinkControlsElm.classList('drink__controls');
//   drinkElm.appendChild(drinkControlsElm);
//   const orderbtnElm = document.createElement('button');
//   orderbtnElm.classList.add('order-btn');
//   orderbtnElm.textContent = 'Objednat';
//   drinkControlsElm.appendChild(orderbtnElm);

//   return drinkElm;

// }

