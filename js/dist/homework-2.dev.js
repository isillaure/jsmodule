"use strict";

// Exercise 1
// 1. pedir al usuario la calificación de un examen ( 0 a 100) 
// Imprimir en consola las equivalencias en letra su calificación, es decir
// -> si es mayor o igual a 90, imprimir "A"
// -> si es mayor o igual a 80 y menor que 90 , imprimir "B"
// -> si es mayor o igual a 70 y menor que 80 , imprimir "C"
// -> si es mayor o igual a 60 y menor que 70 , imprimir "D"
// -> si es mayor o igual a 50 y menor que 60 , imprimir "E"
// -> si es menor 50 , imprimir "F"
var GRADE = parseInt(prompt('Ingrese calificación de examen (0 a 100)'));

if (GRADE >= 90) {
  console.log('La equivalencia de la calificación es A');
} else if (90 > GRADE && GRADE >= 80) {
  console.log('La equivalencia de la calificación es B');
} else if (80 > GRADE && GRADE >= 70) {
  console.log('La equivalencia de la calificación es C');
} else if (70 > GRADE && GRADE >= 60) {
  console.log('La equivalencia de la calificación es D');
} else if (60 > GRADE && GRADE >= 50) {
  console.log('La equivalencia de la calificación es E');
} else {
  console.log('La equivalencia de la calificación es F');
} // Exercise 2
// Pedir al usuario por prompt un numero entre 1 y 100
// Comparar si ese numero es divisible entre 2 y 11 e imprimir en consola un mensaje indicandolo
// sino, enviar un mensaje negandolo


var DIVISIBLE = parseInt(prompt('Ingrese un número del 0 a 100 para ver si es divisible entre 2 y 11.'));

if (DIVISIBLE % 2 === 0 && DIVISIBLE % 11 === 0) {
  console.log('El número es divisible entre 2 y 11');
} else {
  console.log('El número no es divisible entre 2 y 11');
} // Exercise 3
// Pedir al usuario por prompt un numero entre 1 y 100
// Verificar si es un par o impar
// Imprimir en resultado en consola


var EVEN = parseInt(prompt('Ingrese un número del 0 a 100 para ver si es par.'));

if (EVEN % 2 === 0) {
  console.log('El número es par');
} else {
  console.log('El número no impar');
} // Exercise 4
// Pedir al usuario un numero entre 1 y 7 
// Imprimir en consola el dia de la semana equivalente
// es decir:
// 1 -> lunes, 2 -> martes, etc.


var DAYWEEK = parseInt(prompt('Ingrese un número del 1 al 7'));

switch (DAYWEEK) {
  case '1':
    console.log('El día es lunes');
    break;

  case '2':
    console.log('El día es martes');
    break;

  case '3':
    console.log('El día es miércoles');
    break;

  case '4':
    console.log('El día es jueves');
    break;

  case '5':
    console.log('El día es viernes');
    break;

  case '6':
    console.log('El día es sábado');
    break;

  case '7':
    console.log('El día es domingo');
    break;

  default:
    var DAYWEEKTWO = parseInt(prompt('Ingrese un número del 1 al 7'));
} // Exercise 5
// Pedir al usuario un numero entre 1 y 12
// Imprimir en consola el numero de días que corresponden a ese mes
// p.ej.
// 5 -> 31 días