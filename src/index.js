import style from "./style.css";
import logo from "./assets/webpack.svg";
import gemini from "./assets/saga-kanon.png";

const arr = [1, 2, 3];

const codeESNext = () => console.log(...arr);

console.log('Hola mundo sin configuración con webpack 😱');

codeESNext();

// document.getElementById('app').innerHTML = `<img src="${logo}" alt="Webpack">`;

const $app = document.getElementById('app');
const $h1 = document.createElement('h1');
const $logo = document.createElement('img');
const $img = document.createElement('img');

$h1.textContent = 'Hola Mundo con Webpack';
$logo.src = logo;
$logo.classList.add('icon');
$img.src = gemini;

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($img);
