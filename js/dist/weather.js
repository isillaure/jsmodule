const WEATHER = prompt('¿Cómo está el clima?')
let SUNNY = soleado
let RAINY = lluvioso
let SNOWY = nevado
let CLOUDY = nublado

if (WEATHER === SUNNY){
    console.log('El día está soleado')
} else if (WEATHER === RAINY) {
    console.log('El día está lluvioso')
} else if ( WEATHER === SNOWY) {
    console.log('El día está nevado')
} else if (WEATHER === CLOUDY) {
    console.log('El día está nublado')
} else { 
    console.log(`El día está ${WEATHER}`)
} 

// Solución

const WEATHER = prompt('¿Cómo está el clima?')

if (WEATHER === 'soleado'){
    console.log('El día está soleado')
} else if (WEATHER === 'soleado') {
    console.log('El día está lluvioso')
} else if ( WEATHER === 'nevado') {
    console.log('El día está nevado')
} else if (WEATHER === 'nublado') {
    console.log('El día está nublado')
} else { 
    const WEATHER_DESCRIPTION = prompt('Descríbeme tu día')
    console.log(`${WEATHER_DESCRIPTION}`)
} 

