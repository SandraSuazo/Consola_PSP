const power = document.getElementById("indicador-power");
const hold = document.getElementById("indicador-hold");
const bateria = document.getElementById("indicador-bateria");
const wifi = document.getElementById("indicador-wifi");
const video = document.getElementById("video-intro");
const pantalla = document.getElementById("pantalla");
let pspOn;
let menu;
let opcion;
let triangulo = true;
let circulo = true;
let cruz = true;
let cuadrado = true;

const offOn = () => {
  if (pspOn) {
    power.style.backgroundColor = "lawngreen";
    hold.style.backgroundColor = "lawngreen";
    bateria.style.backgroundColor = "red";
    wifi.style.backgroundColor = "orange";
    video.play();
    video.addEventListener("ended", () => {
      menu = document.createElement("div");
      menu.classList.add("menu-container");
      pantalla.appendChild(menu);
      opcion = document.createElement("div");
      opcion.classList.add("menu-opciones");
      opcion.innerText = "¡¡Pulsa algún botón!!";
      menu.appendChild(opcion);
      video.replaceWith(menu);
    });
    pspOn = false;
  } else {
    power.style.backgroundColor = "#60646e";
    hold.style.backgroundColor = "#60646e";
    bateria.style.backgroundColor = "#60646e";
    wifi.style.backgroundColor = "#60646e";
    video.pause();
    video.currentTime = 0;
    pspOn = true;
    pantalla.innerHTML = "";
  }
};

/*

const btnTriangulo = () => {
  if (triangulo && pspOn) {
    video.remove();
    menu.remove();
    pantalla.style.backgroundImage =
      "url('https://media.giphy.com/media/l03Ko3C4HIXEoAjMpI/giphy.gif')";
    triangulo = false;
  } else {
    triangulo = true;
    pantalla.style.backgroundImage = "none";
  }
};

const btnCirculo = () => {
  if (circulo && pspOn) {
    video.remove();
    menu.remove();
    pantalla.style.backgroundImage =
      "url('https://media.giphy.com/media/g4ODNTnpEBrmsghYtD/giphy.gif')";
    circulo = false;
  } else {
    circulo = true;
    pantalla.style.backgroundImage = "none";
  }
};

const btnCruz = () => {
  if (cruz && pspOn) {
    video.remove();
    menu.remove();
    pantalla.style.backgroundImage =
      "url('https://media.giphy.com/media/fSvqyvXn1M3btN8sDh/giphy.gif')";
    cruz = false;
  } else {
    cruz = true;
    pantalla.style.backgroundImage = "none";
  }
};

const btnCuadrado = () => {
  if (cuadrado && pspOn) {
    video.remove();
    menu.remove();
    pantalla.style.backgroundImage =
      "url('https://media.giphy.com/media/p3u5hSm8BXRNBnm8OD/giphy.gif')";
    cuadrado = false;
  } else {
    cuadrado = true;
    pantalla.style.backgroundImage = "none";
  }
}; */
