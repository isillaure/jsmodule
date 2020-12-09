let weight_in_earth = prompt('¿Cuál es tu peso en kg?')
let weight_in_moon = parseInt(weight_in_earth) / 9.81 * 1.622 
alert('Tu peso es: ' + weight_in_moon) 

// Soluciones

let weight_in_earth = prompt('¿Cuál es tu peso en kg?')
let weight_in_moon = parseInt(weight_in_earth / 9.81) * 1.622 
let result = 'Tu peso en la luna es: ' + weight_in_moon  + ' kg.' // + Sirve para concatenar variables.
alert(result) 

let weight_in_earth = prompt('¿Cuál es tu peso en kg?')
let weight_in_moon = parseInt(weight_in_earth) / 9.81 * 1.622 
let result = `Tu peso en la luna es: ${weight_in_moon} kg` // Sintaxis de otra forma para concatenar.
alert(result) 

