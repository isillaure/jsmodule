"use strict";

var NUMBER_ONE = parseInt(prompt('Dame un número'));
var NUMBER_TWO = parseInt(prompt('Dame otro número'));

if (NUMBER_ONE > NUMBER_TWO) {
  console.log("El ".concat(NUMBER_ONE, " es el mayor"));
} else if (NUMBER_ONE === NUMBER_TWO) {
  console.log("El ".concat(NUMBER_ONE, " es igual al ").concat(NUMBER_TWO));
} else {
  console.log("El ".concat(NUMBER_TWO, " es el mayor"));
}