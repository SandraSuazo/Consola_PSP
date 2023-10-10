const power = document.getElementById("indicador-power");
const hold = document.getElementById("indicador-hold");
const bateria = document.getElementById("indicador-bateria");
const wifi = document.getElementById("indicador-wifi");
const pantalla = document.getElementById("pantalla");
let pspPower = false;
let menu;
let opcion;
let triangulo = false;
let circulo = false;
let cruz = false;
let cuadrado = false;

const offOn = () => {
  if (pspPower) {
    power.style.backgroundColor = "#60646e";
    hold.style.backgroundColor = "#60646e";
    bateria.style.backgroundColor = "#60646e";
    wifi.style.backgroundColor = "#60646e";
    pantalla.innerHTML = "";
    pantalla.style.backgroundImage = "";
    pspPower = false;
  } else {
    power.style.backgroundColor = "lawngreen";
    hold.style.backgroundColor = "lawngreen";
    bateria.style.backgroundColor = "red";
    wifi.style.backgroundColor = "orange";
    pspPower = true;
    pantalla.innerHTML =
      '<video id="video-intro" class="video" src="assets/videos/psp-intro.mp4"></video>';
    const videoIntro = document.getElementById("video-intro");
    videoIntro.play();
    videoIntro.addEventListener("ended", () => {
      videoIntro.replaceWith(crearInicio());
    });
  }
};

const crearInicio = () => {
  menu = document.createElement("div");
  menu.classList.add("menu-container");
  pantalla.appendChild(menu);
  opcion = document.createElement("div");
  opcion.classList.add("menu-opciones");
  opcion.innerText = "¡¡Pulsa algún botón!!";
  menu.appendChild(opcion);
  return menu;
};

const limpiarPantalla = () => {
  setTimeout(() => {
    pantalla.innerHTML = "";
    pantalla.style.backgroundImage = "";
    crearInicio();
  }, 3000);
};

const cambiarGif = (forma) => {
  if (pspPower) {
    if (forma === "triangulo") {
      pantalla.innerHTML = "";
      pantalla.style.backgroundImage =
        "url('https://media.giphy.com/media/GK6KacgGJZ4OgsgCAC/giphy.gif')";
      limpiarPantalla();
    } else if (forma === "circulo") {
      pantalla.innerHTML = "";
      pantalla.style.backgroundImage =
        "url('https://media.giphy.com/media/NMBleBfUcpzC8/giphy.gif')";
      limpiarPantalla();
    } else if (forma === "cruz") {
      pantalla.innerHTML = "";
      pantalla.style.backgroundImage =
        "url('https://media.giphy.com/media/MCFLzm0hOyeJPD4K7H/giphy.gif')";
      limpiarPantalla();
    } else if (forma === "cuadrado") {
      pantalla.innerHTML = "";
      pantalla.style.backgroundImage =
        "url('https://media.giphy.com/media/fSvqyvXn1M3btN8sDh/giphy.gif')";
      limpiarPantalla();
    }
  } else {
    pantalla.innerHTML = "";
  }
};
