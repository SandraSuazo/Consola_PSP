const power = document.getElementById("indicador-power");
const hold = document.getElementById("indicador-hold");
const bateria = document.getElementById("indicador-bateria");
const wifi = document.getElementById("indicador-wifi");
const video = document.getElementById("video-intro");
const pantalla = document.getElementById("pantalla");
let pspOn = true;
let start = true;
let triangulo = true;
let circulo = true;
let cruz = true;
let cuadrado = true;
let menu;
let opcion;

const offOn = () => {
  if (pspOn === true) {
    power.style.backgroundColor = "lawngreen";
    hold.style.backgroundColor = "lawngreen";
    bateria.style.backgroundColor = "red";
    wifi.style.backgroundColor = "orange";
    video.play();
    pspOn = false;
  } else {
    power.style.backgroundColor = "#60646e";
    hold.style.backgroundColor = "#60646e";
    bateria.style.backgroundColor = "#60646e";
    wifi.style.backgroundColor = "#60646e";
    pantalla.style.backgroundImage = "none";
    video.remove();
  }
};

const startMenu = () => {
  if (start === true) {
    video.remove();
    menu = document.createElement("div");
    menu.classList.add("menu-container");
    pantalla.appendChild(menu);
    opcion = document.createElement("div");
    opcion.classList.add("menu-opciones");
    opcion.innerText = "¡¡Pulsa algún botón!! ----->";
    menu.appendChild(opcion);
    start = false;
  } else {
    menu.remove();
  }
};

const btnTriangulo = () => {
  if (triangulo === true) {
    video.remove();
    menu.remove();
    pantalla.style.backgroundImage =
      "url('https://media.giphy.com/media/l03Ko3C4HIXEoAjMpI/giphy.gif')";
    triangulo = false;
  } else {
    pantalla.style.backgroundImage = "none";
  }
};

const btnCirculo = () => {
  if (circulo === true) {
    video.remove();
    menu.remove();
    pantalla.style.backgroundImage =
      "url('https://media.giphy.com/media/g4ODNTnpEBrmsghYtD/giphy.gif')";
    circulo = false;
  } else {
    pantalla.style.backgroundImage = "none";
  }
};

const btnCruz = () => {
  if (cruz === true) {
    video.remove();
    menu.remove();
    pantalla.style.backgroundImage =
      "url('https://media.giphy.com/media/fSvqyvXn1M3btN8sDh/giphy.gif')";
    cruz = false;
  } else {
    pantalla.style.backgroundImage = "none";
  }
};

const btnCuadrado = () => {
  if (cuadrado === true) {
    video.remove();
    menu.remove();
    pantalla.style.backgroundImage =
      "url('https://media.giphy.com/media/p3u5hSm8BXRNBnm8OD/giphy.gif')";
    cuadrado = false;
  } else {
    pantalla.style.backgroundImage = "none";
  }
};
