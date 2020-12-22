"use strict";

var dataUsers = [{
  name: 'jorge',
  lastName: 'camarillo',
  age: 29
}, {
  name: 'rubén',
  lastName: 'flores',
  age: 29
}, {
  name: 'liliana',
  lastName: 'juarez',
  age: 29
}, {
  name: 'andré',
  lastName: 'váquez',
  age: 29
}, {
  name: 'emmanuel',
  lastName: 'cianca',
  age: 29
}, {
  name: 'mario',
  lastName: 'saldaña',
  age: 29
}];
dataUsers.forEach(function (element) {
  Object.defineProperty(element, 'fullname', {
    get: function get() {
      return this.name + ' ' + this.lastname;
    }
  });
});