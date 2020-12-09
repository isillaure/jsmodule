"use strict";

var WEATHER = prompt('¿Cómo está el clima?');
var SUNNY = soleado;
var RAINY = lluvioso;
var SNOWY = nevado;
var CLOUDY = nublado;

if (WEATHER === SUNNY) {
  console.log('El día está soleado');
} else if (WEATHER === RAINY) {
  console.log('El día está lluvioso');
} else if (WEATHER === SNOWY) {
  console.log('El día está nevado');
} else if (WEATHER === CLOUDY) {
  console.log('El día está nublado');
} else {
  console.log("El d\xEDa est\xE1 ".concat(WEATHER));
} // Solución