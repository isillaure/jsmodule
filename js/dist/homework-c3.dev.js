"use strict";

// Imprimir en consola la tabla del 7
// 7 x 1 = 7
var num = 7;

for (var i = 1; i <= 10; i++) {
  multi = num * i;
  console.log(num + "x" + i + "=" + multi);
} // Imprimir en consola los múltiplos de 3 y 7  que se encuentran entre el 1 y el 100
// 3,6,7,9,12,14,15....


var total = '';

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 || i % 7 === 0) {
    total = total + i;
  }
}

console.log(total.toString()); // Imprimir en consola la cantidad de espacios que se encuentran en una cadena de texto
// “en un lugar de la mancha” -> 5

var cont = 0;
var quijote = 'En un lugar de la mancha';

for (var i = 0; i <= quijote.length - 1; i++) {
  if (quijote.charAt(i) == " ") {
    cont += 1;
  }
}

console.log('La cantidad es espacios es: ' + cont); // Imprimir en consola la cantidad de vocales que se encuentran en una cadena de texto
// “Hola mundo” -> 4

var cont2 = 0;
var texto = 'Hola mundo';

for (var i = 0; i <= quijote.length - 1; i++) {
  if (texto.charAt(i) == " " || texto.charAt(i) == "e" || texto.charAt(i) == "i" || texto.charAt(i) == "o" || texto.charAt(i) == "u") {
    cont2 += 1;
  }
}

console.log('La cantidad de vocales es: ' + cont2);