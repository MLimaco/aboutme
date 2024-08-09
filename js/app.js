"use strict";


let nombre = prompt("Bienvenido a mi página. ¿Cómo te llamas?");
alert("¡Bienvenido " + nombre + "! Por favor, responde las siguientes preguntas con si o no.");


const cuestionario = [
    "¿Mi segundo nombre es Angel?",
    "¿Me gustan los libros más que los videojuegos?",
    "¿He invertido más de 1000 horas en World of Warcraft?",
    "¿Puedo pasar hasta 48 horas corridas jugando videojuegos?",
    "¿Me gusta jugar Fifa?",
];

const respuestas = [
    "Si",
    "No",
    "Si",
    "Si",
    "No",
];

let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

for (let i = 0; i < cuestionario.length; i++) {
    const comparacionRespuestas = prompt(cuestionario[i]);
    if (respuestas[i].toLowerCase() === comparacionRespuestas.toLowerCase()) {
        respuestasCorrectas++;
        alert("¡Respuesta Correcta! Parece que si me conoces 😉");
    } else {
        respuestasIncorrectas++;
        alert("¡Jaaa Jaaa Te Equivocaste!");
    }
}

alert("Gracias por participar, tu puntuación fue: " + respuestasCorrectas + " respuestas correctas de 5 preguntas");

// Fuente ejercicio tienda regalos code 102 y corregido con chatgpt
let mensajeHeader = document.createElement('p');
mensajeHeader.className = 'bienvenida';
mensajeHeader.innerText = "¡Bienvenido " + nombre + "!";
let headerBienvenida = document.querySelector('header');
if (headerBienvenida) {
    headerBienvenida.appendChild(mensajeHeader);
}

// Fuente ejercicio tienda regalos code 102 y corregido con chatgpt
let mensajeFooter = document.createElement('p')
if (respuestasCorrectas >= 3) {
    mensajeFooter.innerText = "¡Parece que me conoces 😏!";
} else {
    mensajeFooter.innerText = "No me conoces nadita 🙄";
}

let footerPuntaje = document.querySelector('footer');
if (footerPuntaje) {
    footerPuntaje.appendChild(mensajeFooter);
}

console.log(
    "Hola",
    nombre,
    "acertaste esta cantidad de preguntas ",
    respuestasCorrectas
  );
  console.log(
    nombre,
    "estas son las respuestas que erraste ",
    respuestasIncorrectas
  );