// Imprimir la tabla del 8 en reversa.

for (var i = 10; i >= 1; i-- ) {
    console.log(`${8} x ${i} = ${8 * i}`)
}



// Imprimir los números pares entre 1 y 100

for (var i = 1; i <= 100; i++) {

    if (i % 2 === 0){
    console.log(i)
    }    
}    

// Dado un string revertir el orden de la palabra


const textoN = "ola ke ase"
let textoReversa // Se puede no inicializar
for (let i = textoN.length -1; 1 >= 0; i-- ) {
    textoReversa += textoN[i]
}

console.log(textoReversa)
