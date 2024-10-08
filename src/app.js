/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/pikachu.jpg";
import "./assets/img/pokeball.ico";

window.onload = function() {
  //write your code here

  let quien = [
    "El perro",
    "El gato",
    "El vecino",
    "Un coche",
    "Una abuela",
    "El repartidor",
    "Una pelota",
    "El tren",
    "El ordenador",
    "Un niño"
  ];
  let accion = [
    "mojó",
    "destruyó",
    "quemó",
    "se comió",
    "se puso a llorar",
    "pateó"
  ];
  let objetivo = [
    "la casa",
    "la cama",
    "el televisor",
    "el móvil",
    "la tarea",
    "el instituto",
    "a mi jefe",
    "la cena"
  ];
  let cuando = [
    "esta mañana",
    "hace un rato",
    "ayer",
    "la semana pasada",
    "hace un momento",
    "esta tarde",
    "anoche"
  ];
  let motivo = [
    "porque se aburría.",
    "porque estaba feliz.",
    "porque quería divertirse.",
    "porque estaba triste.",
    "porque no tenía nada qué hacer."
  ];

  let quienRandom = Math.floor(Math.random() * quien.length);
  let accionRandom = Math.floor(Math.random() * accion.length);
  let objetivoRandom = Math.floor(Math.random() * objetivo.length);
  let cuandoRandom = Math.floor(Math.random() * cuando.length);
  let motivoRandom = Math.floor(Math.random() * motivo.length);

  document.querySelector("#excuse").innerHTML =
    quien[quienRandom] +
    " " +
    accion[accionRandom] +
    " " +
    objetivo[objetivoRandom] +
    " " +
    cuando[cuandoRandom] +
    " " +
    motivo[motivoRandom];

  console.log("Hello Rigo from the console!");
};
