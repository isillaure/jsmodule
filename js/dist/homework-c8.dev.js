"use strict";

// Ejercicio 1
// dado el siguiente array de objetos
var users = [{
  firstName: 'Bradley',
  lastName: 'Bouley',
  role: 'Full Stack Resident'
}, {
  firstName: 'Chloe',
  lastName: 'Alnaji',
  role: 'Full Stack Resident'
}, {
  firstName: 'Jonathan',
  lastName: 'Baughn',
  role: 'Enterprise Instructor'
}, {
  firstName: 'Michael',
  lastName: 'Herman',
  role: 'Lead Instructor'
}, {
  firstName: 'Robert',
  lastName: 'Hajek',
  role: 'Full Stack Resident'
}, {
  firstName: 'Wes',
  lastName: 'Reid',
  role: 'Instructor'
}, {
  firstName: 'Zach',
  lastName: 'Klabunde',
  role: 'Instructor'
}]; // obtener un nuevo objeto con esta estructura
//-> {
//   'Bradley Bouley': 'Full Stack Resident',
//   'Chloe Alnaji': 'Full Stack Resident',
//   'Jonathan Baughn': 'Enterprise Instructor',
//   'Michael Herman': 'Lead Instructor',
//   'Robert Hajek': 'Full Stack Resident',
//   'Wes Reid': 'Instructor',
//   'Zach Klabunde': 'Instructor'
//   }

var flattenUsers = function flattenUsers(users) {
  users.reduce(function (lastValue, currentValue) {
    var fullName = currentValue.firstName + ' ' + currentValue.lastName;
    return lastValue[fullName] = currentValue.role, lastValue;
  }, {});
};

console.log(flattenUsers(users)); //

var joinUsers = users.reduce(function (newObject, user) {
  var fullName = user.firstName + ' ' + user.lastName;
  newObject[fullName] = user.role;
  return newObject;
}, {}); // Ejercicio 2
//  tomando el array users,
//  hacer una funcion que reciba 2 parametros (arrayUsers, role)
//  y retorne un array con los usuarios que cumplan con el role

var filterRole = function filterRole(array, role) {
  return array.filter(function (currentValue) {
    return currentValue.role === role;
  });
};

console.log(filterRole(users, "Lead Instructor")); // Ejercicio 3
// tomando el siguiente array de objetos

var persons = [{
  name: 'Bob',
  age: 30,
  voted: true
}, {
  name: 'Jake',
  age: 32,
  voted: true
}, {
  name: 'Kate',
  age: 25,
  voted: false
}, {
  name: 'Sam',
  age: 20,
  voted: false
}, {
  name: 'Phil',
  age: 21,
  voted: true
}, {
  name: 'Ed',
  age: 55,
  voted: true
}, {
  name: 'Tami',
  age: 54,
  voted: true
}, {
  name: 'Mary',
  age: 31,
  voted: false
}, {
  name: 'Becky',
  age: 43,
  voted: false
}, {
  name: 'Joey',
  age: 41,
  voted: true
}, {
  name: 'Jeff',
  age: 30,
  voted: true
}, {
  name: 'Zack',
  age: 19,
  voted: false
}]; // obtener lo siguiente
// 1. Cantidad de personas que votaron
// 2. Cual es el promedio de Edad de los votantes
//1

var whoVote = function whoVote(persons) {
  return persons.reduce(function (lastValue, currentValue) {
    return currentValue.voted === true ? lastValue + 1 : lastValue;
  }, 0);
};

console.log(whoVote(persons)); //2

var averageVoters = persons.reduce(function (lastValue, currentValue) {
  return lastValue + currentValue.age;
}, 0) / averageVoters.length;
console.log(averageVoters);
var numbersReduce = [[1, 2, 4], [1, 2, 8], [1, 9, 3]];
var sumOfNumbers = numbersReduce.reduce(function (lastValue, currentValue) {
  return lastValue + currentValue.reduce(function (lastValue2, currentValue2) {
    return lastValue2 + currentValue2;
  }, 0);
}, 0);
console.log(sumOfNumbers);