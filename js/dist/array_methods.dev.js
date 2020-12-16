"use strict";

// function Multiplication(stringOfNumbers = '987') {
//     for (let i = 0; i <= stringOfNumbers.length - 1; i++) {
//         for (let a = 1; a <= 10; a++) {
//             console.log(`${stringOfNumbers[i]} x ${a} = ${stringOfNumbers[i]*a}`);
//         }
//     }
// }
var array = [9, 8, 7];
multiplicationArray.forEach(function (currentTable) {
  for (var a = 1; a <= 10; a++) {
    console.log("".concat(currentTable, " x ").concat(a, " = ").concat(currentTable * a));
  }
}); //function 
// [1, 2, 3]
// -> [2, 4, 6]
//forEach

var array2 = [1, 2, 3];
array2.forEach(function (currentElement) {
  arrayResult = [];
  arrayResult.push(currentElement * 2);
  return arrayResult;
});

var doubleValues = function doubleValues(arrNumbers) {
  var arrayToFill = [];
  arrNumbers.forEach(function (currentValue) {
    arrayToFill.push(currentValue * 2);
  });
  return arrayToFill;
};

console.log(doubleValues[(1, 2, 3)]); //function
//[1, 2, 3, 4]
// -> [2, 4]
//forEach

var array3 = [1, 2, 3, 4];
array3.forEach(function (currentElement) {
  if (currentElement % 2 === 0) {
    evenArray = currentElement;
  }
});

var oddNumber = function oddNumber(arrNumbers2) {
  var arrayToFill2 = [];
  arrNumbers2.forEach(function (currentValue2) {
    if (currentValue2 % 2 === 0) {}
  });
  return arrayToFill;
};

console.log(doubleValues[(1, 2, 3)]); // function
// ['hola', 'mundo']
// -> ['ha', 'mo']

var array4 = ['hola', 'mundo'];
array4.forEach();