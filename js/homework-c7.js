// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el valor más alto
// input: [1,4,3,2,5]
// output: -> [5]

const largestNumber = arrNumbers => {
    let arrayToFill = []
    arrNumbers.forEach(currentValue => {
        if (currentValue > arrayToFill ) {
            arrayToFill = currentValue
        } 
    })
    return arrayToFill
}
console.log(largestNumber[1,4,3,2,5])


// Ejercicio 2 .map()
// función
// convertir todos los elementos numéricos de un array
// a strings
// input: [1,2,3,4,5]
// output -> ['1,','2','3','4','5']


const stringArray = arrNumbers => {
    arrNumbers.map(currentValue => {
        return currentValue.toString
    })
}

console.log(stringArray[1,2,3,4,5])


// Ejercicio 3 .map()
// función
// capitalizar todos los elementos que sean strings de un array
// input: ['hOlA', 'mundo', 123]
// output -> ['Hola','Mundo','123]




// Ejercicio 4 .filter()
//  función
// dado un array de números, filtre los elementos
// y devuelva un array con los elementos que no estan duplicados
// [1,2,4,2,5,4]
// -> [1,5]


const nonduplicatedNumber = arrNumbers => {
    arrNumbers.filter(currentValue,index => {
        if (arrNumbers.indexOf(currentValue) === index) {
            return currentValue
        }
    })
}
console.log(nonduplicatedNumber[1,4,3,2,5])

// Ejercicio 5 .filter()
// Función
// dado un array de números, filtre los elementos
// y devuelva un array con los elementos duplicados
// [1,2,4,2,5,4]
// -> [2,4]

const duplicatedNumber = arrNumbers => {
    arrNumbers.filter(currentValue,index => {
        if (arrNumbers.indexOf(currentValue) !== index) {
            return currentValue
        }
    })
}
console.log(duplicatedNumber[1,4,3,2,5])


// Ejercicio 6 .filter()
//  funcion
// dado un array de años, filtre los elementos
// y devuelva un array con los años que son bisiesto
// [1990, 2000, 2001, 2020]
// -> [2000,2020]

const leapYear = arrYears => {
    return arrYears.filter(currentValue => {
        return ((currentValue % 4 == 0) && (currentValue % 100 != 0)) || (currentValue % 400 == 0) 
    })
}


