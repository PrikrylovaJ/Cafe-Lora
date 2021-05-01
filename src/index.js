import './style.css';

console.log('funguju!');


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