// Escribir una función que a partir del string "987"
// Imprimir las tablas de multiplicar en ese orden.

function Multiplication(stringOfNumbers = '987') {

    for (let i = 0; i <= stringOfNumbers.length - 1; i++) {
        for (let a = 1; a <= 10; a++) {
            console.log(`${stringOfNumbers[i]} x ${a} = ${stringOfNumbers[i]*a}`);
        }
    }
}

// Escribir una función que dado un string como parámetro, verifique si es o no un palíndromo.

function isPalindrome (stringPalindrome) {
    const word = stringPalindrome.replace(' ', '')
    let wordReversed = ''

    for (let i = word.length - 1; i >= 0; i--) {
        wordReversed += word[i]
    }

    console.log(wordReversed)

    if (word === wordReversed) {
        console.log('Es un palindromo')
    } else {
        console.log('No es un palindromo')
    }
}

isPalindrome ('anitalavalatina')

// Escribir una función que dados 2 parámetros,
// imprima en consola los tipos de datos que son: getDataType (1, "2")

function getDataType (data1 = 'hola', data2 = 2){

    console.log('El primer parámetro es: ', typeof data1)
    console.log('El segundo parámetro es: ', typeof data2)
}