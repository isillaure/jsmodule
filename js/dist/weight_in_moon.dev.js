"use strict";

var weight_in_earth = prompt('¿Cuál es tu peso en kg?');
var weight_in_moon = parseInt(weight_in_earth) / 9.81 * 1.622;
alert('Tu peso es: ' + weight_in_moon);