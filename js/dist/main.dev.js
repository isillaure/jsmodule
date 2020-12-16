"use strict";

function add(a, b) {
  var c = a + b;
  return c; // Return termina la ejecución del programa, con return termina la función, después de return ya no se ejecuta el código que sigue.
  // Devuelve el valor en vez de imprimirlo con console.log.
}

var result = add(2, 5); // result -> 7

var myArray = ["string", 2, [1, 2, 3]];
console.log(myArray[1]);