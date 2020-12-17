"use strict";

// ['a', 'b', 'c', 'c', 'b']
// searchOcurrence (array, 'caracter')
var arrOfNumbers = ['a', 'b', 'c', 'c', 'b'];
var searchOcurrence = arrOfNumbers.reduce(function (lastValue, currentValue) {
  return currentValue === 'c' ? ++lastValue : lastValue;
}, 0);
console.log(searchOcurrence); //

var arrOfStrings = ['en', 'algun', 'lugar', 'de', 'la', 'mancha'];

var flattenString = function flattenString(arrOfStrings) {
  return arrOfStrings.reduce(function (a, b) {
    return a.concat(b);
  }, []);
};

console.log(flattenString);