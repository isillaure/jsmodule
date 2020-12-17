// ['a', 'b', 'c', 'c', 'b']
// searchOcurrence (array, 'caracter')

const arrOfNumbers = ['a', 'b', 'c', 'c', 'b']

const searchOcurrence = arrOfNumbers.reduce((lastValue, currentValue) =>
    (currentValue === 'c') ? ++lastValue : lastValue, 0)
console.log(searchOcurrence)

// Otra versión

const arrOfNumbers = ['a', 'b', 'c', 'c', 'b']

const searchOcurrence = (arrOfNumbers, elementToSeach) => {
    arrOfNumbers.reduce((lastValue, currentValue) => {
    if (currentValue === elementToSeach) {
        return lastValue + 1
    } else {
        lastValue + 0
    }
}, 0)
return ocurrence 
}

console.log(searchOcurrence)

//['en', 'algun', 'lugar', 'de', 'la', 'mancha']
// -> 'En algun lugar de la mancha'
// .reduce()

const arrOfStrings = ['en', 'algun', 'lugar', 'de', 'la', 'mancha']
const flattenString = arrOfStrings => {
    arrOfStrings.reduce((lastValue,currentValue) => {
        return lastValue + ' ' + currentValue
    }, 'initial ')
}