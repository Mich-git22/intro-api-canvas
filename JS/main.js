/***********************************************************************
 * Programa: Dibujo de un rectángulo en Canvas
 * Descripción: Este programa utiliza el elemento Canvas de HTML5
 *              para dibujar un rectángulo de color verde en pantalla.
 * Autor: Michelle Pacheco
 * Fecha: 2026
 * Tecnología: JavaScript + Canvas (HTML5)
 ***********************************************************************/

// Se obtiene el elemento <canvas> del documento HTML mediante su ID.
// "lienzo" es el identificador del canvas definido en el archivo HTML.
var canvas = document.getElementById("lienzo");

// Se ajusta el tamaño del canvas al 50% del tamaño de la pantalla
// window.innerWidth  -> ancho total de la ventana
// window.innerHeight -> alto total de la ventana
canvas.width = window.innerWidth /2;
canvas.height = window.innerHeight/2;

// Se obtiene el contexto de dibujo en 2D del canvas.
var ctx = canvas.getContext("2d");

// Se define el color de relleno que se usará para las figuras.
ctx.fillStyle = "rgb(158,212,248)";

// Se dibuja un rectángulo que ahora ocupa casi todo el canvas
ctx.fillRect(10, 10, 200, 200);
