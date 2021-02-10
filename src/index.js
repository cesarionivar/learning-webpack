import style from "./style.css";
import logo from "./assets/webpack.svg";

const arr = [1, 2, 3];

const codeESNext = () => console.log(...arr);

console.log('Hola mundo sin configuración con webpack 😱');

codeESNext();

document.getElementById('app').innerHTML = `<img src="${logo}" alt="Webpack">`;