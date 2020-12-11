// Imprimir la tabla del 8 en reversa.

for (let i = 10; i >= 1; i-- ) {
    console.log(`${8} x ${i} = ${8 * i}`)
}

// Imprimir los números pares entre 1 y 100

for (let a = 1; a <= 100; a++) {

    if (a % 2 === 0){
    console.log(a)
    }    
}    

// Dado un string revertir el orden de la palabra

const stringToReverse = "Hola mundo"
let stringReversed = ''
for(let a = stringToReverse.length - 1; a >= 0 ; a--) {
    stringReversed += stringToReverse[a]
}
console.log(stringReversed)

