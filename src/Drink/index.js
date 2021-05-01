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

  const orderbtnElm = element.querySelector('.order-btn');
  const imgElm = element.querySelector('.drink__cup');

  orderbtnElm.addEventListener('click', () => {
    if (!props.ordered) {
    imgElm.classList.toggle('drink__cup--selected');
    orderbtnElm.textContent = "Zrušit";
    props.ordered = true;
  } else {
    imgElm.classList.toggle('drink__cup--selected');
    orderbtnElm.textContent = "Objednat";
    props.ordered = false;
  }
});

  return element;
};









