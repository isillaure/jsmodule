"use strict";

// Imprimir la tabla del 8 en reversa.
for (var i = 10; i >= 1; i--) {
  console.log("".concat(8, " x ", i, " = ").concat(8 * i));
} // Imprimir los números pares entre 1 y 100


for (var a = 1; a <= 100; a++) {
  if (a % 2 === 0) {
    console.log(a);
  }
} // Dado un string revertir el orden de la palabra


var reversaN = "ola ke ase";
var reversa2 = ' '; // Se puede no inicializar

for (var g = reversaN.length - 1; 1 >= 0; g--) {
  reversa2 += reversaN[g];
}

console.log(reversa2); // Imprimir los números pares entre 1 y 100 en WHILE