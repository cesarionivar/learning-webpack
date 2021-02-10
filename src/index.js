import style from "./style.css";
import logo from "./assets/webpack.svg";
import gemini from "./assets/saga-kanon.png";
import data from "./data.json";
import {HelloWorld} from "./components/helloWorld.js";

const arr = [1, 2, 3];

const codeESNext = () => console.log(...arr);

console.log('Hola mundo sin configuración con webpack 😱');

codeESNext();

// document.getElementById('app').innerHTML = `<img src="${logo}" alt="Webpack">`;

const $app = document.getElementById('app');
const $h1 = document.createElement('h1');
const $logo = document.createElement('img');
const $img = document.createElement('img');
const $nav = document.createElement('nav');

let menu = "";
let hello = new HelloWorld("Vanilla JS");

data.links.forEach(link => menu += `<a href="${link[1]}">${link[0]}</a>`);

$h1.textContent = hello.greet();
$logo.src = logo;
$logo.classList.add('icon');
$img.src = gemini;
$nav.innerHTML = menu;
$nav.classList.add('menu');

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($nav);
$app.appendChild($img);
