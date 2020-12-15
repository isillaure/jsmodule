"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Escribir una función que a partir del string "987"
// Imprimir las tablas de multiplicar en ese orden.
function Multiplication() {
  var stringOfNumbers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '987';

  for (var i = 0; i <= stringOfNumbers.length - 1; i++) {
    for (var a = 1; a <= 10; a++) {
      console.log("".concat(stringOfNumbers[i], " x ").concat(a, " = ").concat(stringOfNumbers[i] * a));
    }
  }
} // Escribir una función que dado un string como parámetro, verifique si es o no un palíndromo.


function isPalindrome(stringPalindrome) {
  var word = stringPalindrome.replace(' ', '');
  var wordReversed = '';

  for (var i = word.length - 1; i >= 0; i--) {
    wordReversed += word[i];
  }

  console.log(wordReversed);

  if (word === wordReversed) {
    console.log('Es un palindromo');
  } else {
    console.log('No es un palindromo');
  }
}

isPalindrome('anitalavalatina'); // Escribir una función que dados 2 parámetros,
// imprima en consola los tipos de datos que son: getDataType (1, "2")

function getDataType() {
  var data1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hola';
  var data2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  console.log('El primer parámetro es: ', _typeof(data1));
  console.log('El segundo parámetro es: ', _typeof(data2));
}