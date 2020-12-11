// Imprimir los números pares entre 1 y 100 en WHILE

let counter = 1 
while(counter <= 100){
    if (counter %2 === 0) {
        console.log(counter)
    }
    counter++
}

// Dado un string revertir el orden de la palabra en WHILE

const stringToReverse = "Hola mundo"
let stringReversed = ''
let counter2 = stringToReverse.length - 1
while(counter2 >= 0){
    stringReversed += stringToReverse[counter2]
    counter2--
}
console.log(stringReversed)

