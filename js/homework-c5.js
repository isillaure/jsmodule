/**
 * Escribir una función que calcule la edad de un perro en años caninos.
 * La función debe recibir el nombre y la edad del perro en años humanos
 * convertirlo a años caninos, e imprimir en consola 
 * calculateDogAge(2)
 * -> Poppy tiene 14 años caninos
 */

function calculateDogAge (dogYears, dogName = 'Nombre por definir') {
    console.log(`${dogName} tiene ${dogYears*7} años caninos`)
}

calculateDogAge(7, Asuka)

/**
 * Crear una función que calcule el área y la circunferencia de un circulo
 * Tomar como parámetro del radio del circulo 
 * calcGeometry(4)
 * -> El area del circulo es NN y la circunferencia es de NN
 */

function calcGeometry (circleRadius) {
    const pi = 3.141592
    console.log(`El área del círculo es ${pi * (Math.pow(circleRadius, 2))} y la circunferencia es de ${pi * circleRadius}.`)
}

calcGeometry (6)

/**
 * Crear una función que convierta los grados celsius en fahrenheit y viceversa
 * debe recibir la temparatura y si la temperatura esta en Celsius o Fahrenheit
 * temperatureConverter(100,"C")
 * -> 100º Celsius equivalen a 212º fahrenheit
 */
function temperatureConverter (temperatureScale, degree) {
    if (temperatureScale = F) {
        console.log ('${degree} ${temperatureScale} equivalen a ${(degree - 32) * (5/9)} º Centígrados.')
    } else {
        console.log ('${degree} ${temperatureScale} equivalen a ${(degree * (9/5)) + 32 } Fahrenheit.')
    }
}

temperatureConverter (32, C)

/*
 * Escribir una funcion que calcule el factorial de un número
 * getFactorial(10)
 * -> 3628800
 */
