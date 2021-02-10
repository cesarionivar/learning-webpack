import style from "./style.css";
import logo from "./assets/webpack.svg";
import data from "./data.json";
import {HelloWorld} from "./components/helloWorld.ts";



const $app = document.getElementById('app');
const $h1 = document.createElement('h1');
const $logo = document.createElement('img');
const $nav = document.createElement('nav');

let menu = "";
let hello = new HelloWorld("TypeScript");

data.links.forEach(link => menu += `<a href="${link[1]}">${link[0]}</a>`);

$h1.textContent = hello.greet();
$logo.src = logo;
$logo.classList.add('icon');
$nav.innerHTML = menu;
$nav.classList.add('menu');

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($nav);
$app.appendChild($img);
