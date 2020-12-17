"use strict";

var person = {
  name: 'nayeli',
  location: {
    cp: '55778',
    street: ' asadaas'
  },
  credential: {
    key1: '55778',
    key2: 'asadaas'
  }
}; // Clonar un objeto

var person2 = person; // Actualizar una propiedad

person.location.street = 'reforme'; // Eliminar una propiedad

delete person.credential.key2; // Imprimir cada uno de los valores de la propiedad location
// y credential

for (item in person) {
  if (item === 'location' || item === 'credential') {
    for (item2 in person[item]) {
      console.log("".concat(item2, ": ").concat(person[item][item2]));
    }
  }
} // obj koders


var koders = [{
  name: 'nayeli',
  average: 10,
  location: {
    cp: '55778',
    street: ' asadaas'
  }
}, {
  name: 'nayeli',
  average: 9
}]; // Imprimir el promedio de cada koder

koders.forEach(function (current, index) {
  console.log(current.average);
}); // Imprimir el promedio general de los koders

var averageKoders = koders.reduce(function (acc, cv) {
  return acc + cv.average;
}, 0) / koders.length;
console.log(averageKoders); // Filtrar los koders que tienen promedio mayor a 9

koders.filter(function (cv) {
  return cv.average > 9;
}); // Filtrar los koders que tengan la propiedad location

koders.filter(function (cv) {
  if (cv.location) {
    return cv;
  }
});