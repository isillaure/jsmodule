"use strict";

var obj = {
  name: 'ruben',
  lastname: 'flores',
  age: 29,
  fullname: function fullname() {
    return this.name + ' ' + this.lastname;
  },
  saltar: function saltar() {
    return "".concat(this.name, " est\xE1 saltando");
  }
};
obj.fullname();
obj.saltar; //this es palabra reservada
//new es palabra reservada para crear un nuevo objeto

var koder = {
  firstName: Nayeli,
  lastname: Gutiérrez,
  age: 27,
  id: id
};