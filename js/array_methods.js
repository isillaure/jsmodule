//.FOREACH

// function Multiplication(stringOfNumbers = '987') {

//     for (let i = 0; i <= stringOfNumbers.length - 1; i++) {
//         for (let a = 1; a <= 10; a++) {
//             console.log(`${stringOfNumbers[i]} x ${a} = ${stringOfNumbers[i]*a}`);
//         }
//     }
// }

const array = [ 9, 8, 7]
multiplicationArray.forEach(currentTable =>{
    for (let a = 1; a <= 10; a++) {
        console.log(`${currentTable} x ${a} = ${currentTable*a}`);
    }
})

//function 
// [1, 2, 3]
// -> [2, 4, 6]
//forEach

const doubleValues = arrNumbers => {
    let arrayToFill = []
    arrNumbers.forEach(currentValue => {
        arrayToFill.push(currentValue * 2)
    }) 
    return arrayToFill
}
console.log(doubleValues[1, 2, 3])

//function
//[1, 2, 3, 4]
// -> [2, 4]
//forEach

const oddNumber = arrNumbers2 => {
    let arrayToFill = []
    arrNumbers2.forEach(currentValue => {
        if (currentValue % 2 === 0) {
            arrayToFill.push(currentValue)
        } 
    })
    return arrayToFill
}

// function
// ['hola', 'mundo']
// -> ['ha', 'mo']

const firstAndLast = arrString => {
    let arrayToFill = []
    arrString.forEach(currentValue => {
        arrayToFill.push(currentValue.slice(0,1) + currentValue.slice(-1))
    return arrayToFill
}

// .MAP
[1, 2, 3].map( (currentValue) => currentValue * 2 )