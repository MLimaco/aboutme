"use strict";


let nombre = prompt("Bienvenido a mi página. ¿Cómo te llamas?");
alert("¡Bienvenido " + nombre + "! Por favor, responde las siguientes preguntas con si o no.");


const cuestionario = [
    "¿Mi segundo nombre es Angel?",
    "¿Me gustan los libros más que los videojuegos?",
    "¿He invertido más de 1000 horas en World of Warcraft?",
    "¿Puedo pasar hasta 48 horas corridas jugando videojuegos?",
    "¿Me gusta jugar Fifa?",
    "¿En qué número estoy pensando?",
    "Menciona uno de mis colores favoritos",
];

const numeroRandom = Math.floor(Math.random() * 10) + 1;
console.log(numeroRandom)

const respuestas = [
    "Si",
    "No",
    "Si",
    "Si",
    "No",
    numeroRandom,
    ["azul", "rojo", "amarillo"],
];

console.log(respuestas)

let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;
let intentos = 0;

for (let i = 0; i < cuestionario.length; i++) {
    const comparacionRespuestas = prompt(cuestionario[i]);
    if (i === 5) {
        for (let j = 0; j < 3; j++) {
            const respuestaRandom = parseInt(comparacionRespuestas);
            if (respuestaRandom === respuestas[5]) {
                alert("¡Respuesta Correcta! Parece que si me conoces 😉");
                respuestasCorrectas++;
                intentos++;
                break;
            } else if (respuestaRandom > respuestas[5]) {
                alert('¡Jaaa Jaaa Te Equivocaste! El numero era menor');
                respuestasIncorrectas++;
                intentos++;
                prompt(cuestionario[5]);
            } else if (respuestaRandom < respuestas[5]) {
                alert('¡Jaaa Jaaa Te Equivocaste! El numero era mayor');
                respuestasIncorrectas++;
                intentos++;
                prompt(cuestionario[5]);
            }
        }
        console.log(intentos);
        if (intentos == 3) {
            alert("Te quedaste sin intentos, pense en el numero " + numeroRandom);
        }
    } else if (i === 6) {
        for(let index = 0; index < respuestas[6].length; index++){
            if (respuestas[i][index].toLowerCase() === comparacionRespuestas.toLowerCase()) {
                alert("¡Respuesta Correcta! Parece que si me conoces 😉");
                respuestasCorrectas++;
                break;
            } else {
                alert("¡Jaaa Jaaa Te Equivocaste!");
                respuestasIncorrectas++;
                prompt(cuestionario[6]);
            }
        }
    } else {
        if (respuestas[i].toLowerCase() === comparacionRespuestas.toLowerCase()) {
            respuestasCorrectas++;
            alert("¡Respuesta Correcta! Parece que si me conoces 😉");
        } else {
            respuestasIncorrectas++;
            alert("¡Jaaa Jaaa Te Equivocaste!");
        }
    }
}

alert("Gracias por participar, tu puntuación fue: " + respuestasCorrectas + " respuestas correctas de " + cuestionario.length +" preguntas");

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
if (respuestasCorrectas >= 5) {
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