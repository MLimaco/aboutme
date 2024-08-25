"use strict";

let nombre;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

function bienvenida() {
    nombre = prompt("Bienvenido a mi página. ¿Cómo te llamas?");
    alert("¡Bienvenido " + nombre + "! Por favor, responde las siguientes preguntas con si o no.");

    let mensajeHeader = document.createElement('p');
    mensajeHeader.className = 'bienvenida';
    mensajeHeader.innerText = "¡Bienvenido " + nombre + "!";
    let headerBienvenida = document.querySelector('header');
    if (headerBienvenida) {
        headerBienvenida.appendChild(mensajeHeader);
    }
}

function numeroAleatorio() {
    const numeroRandom = Math.floor(Math.random() * 10) + 1;

    return numeroRandom
}

function preguntasRespuestas() {
    const cuestionario = [
        "¿Mi segundo nombre es Angel?",
        "¿Me gustan los libros más que los videojuegos?",
        "¿He invertido más de 1000 horas en World of Warcraft?",
        "¿Puedo pasar hasta 48 horas corridas jugando videojuegos?",
        "¿Me gusta jugar Fifa?",
        "¿En qué número estoy pensando?",
        "Menciona uno de mis colores favoritos",
    ];

    const respuestaSeis = numeroAleatorio();


    const respuestas = [
        "Si",
        "No",
        "Si",
        "Si",
        "No",
        respuestaSeis,
        ["azul", "rojo", "amarillo"],
    ];

    console.log(respuestas)

    for (let i = 0; i < cuestionario.length; i++) {
        let comparacionRespuestas = prompt(cuestionario[i]);

        if (i === 5) {
            let intentos = 0;
            let acerto = false;

            for (let j = 0; j < 3; j++) {
                const respuestaRandom = parseInt(comparacionRespuestas);
                intentos++;

                if (respuestaRandom === respuestas[5]) {
                    alert("¡Respuesta Correcta! Parece que si me conoces 😉");
                    respuestasCorrectas++;
                    acerto = true;
                    break;
                } else if (respuestaRandom > respuestas[5]) {
                    alert('¡Jaaa Jaaa Te Equivocaste! El numero era menor');
                } else if (respuestaRandom < respuestas[5]) {
                    alert('¡Jaaa Jaaa Te Equivocaste! El numero era mayor');
                }
                if (j < 2) {
                    comparacionRespuestas = prompt("Intenta de nuevo: " + cuestionario[5]);
                }
            }
            if (!acerto) {
                alert("Te quedaste sin intentos, pensé en el número " + respuestaSeis);
                respuestasIncorrectas++;
            }
        } else if (i === 6) {
            let acerto = false;

            for (let index = 0; index < respuestas[6].length; index++) {
                if (respuestas[6][index].toLowerCase() === comparacionRespuestas.toLowerCase()) {
                    alert("¡Respuesta Correcta! Parece que si me conoces 😉");
                    respuestasCorrectas++;
                    acerto = true;
                    break;
                }
            }
            if (!acerto) {
                alert("¡Jaaa Jaaa Te Equivocaste!");
                respuestasIncorrectas++;
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

    let mensajeFooter = document.createElement('p')
    if (respuestasCorrectas >= 5) {
        mensajeFooter.innerText = "¡Parece que me conoces 😏! Si quieres no leas, ya para que jeje";
    } else {
        mensajeFooter.innerText = "No me conoces nadita, será mejor que leas sobre mi 🙄";
    }

    let footerPuntaje = document.querySelector('footer');
    if (footerPuntaje) {
        footerPuntaje.appendChild(mensajeFooter);
    }

    alert("Gracias por participar, tu puntuación fue: " + respuestasCorrectas + " respuestas correctas de " + cuestionario.length + " preguntas");
}


bienvenida();
preguntasRespuestas();

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