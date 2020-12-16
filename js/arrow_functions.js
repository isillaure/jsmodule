// Pasar los ejercicios a arrow functions.

// 1

const calculateDogAge = (dogYears) => {
    const dogYears = 7 * dogYears
    return dogYears
}

const calculateDogAge = (dogYears) => {
    return 7 * dogYears
}

const calculateDogAge = (dogYears) => 7 * dogYears

// 2.1

const calcAreaCircle = (circleRadius) => {
    const resultAreaCircle = Math.PI * (Math.pow(circleRadius, 2))
    return resultAreaCircle
}

const calcAreaCircle = (circleRadius) => {
    return Math.PI * (Math.pow(circleRadius, 2))
}

const calcAreaCircle = (circleRadius) => Math.PI * (Math.pow(circleRadius, 2))

// 2.2

const calcCircumCircle = (circleRadius) => {
    const resultCircumCircle = Math.PI * circleRadius
    return resultCircumCircle
}

const calcCircumCircle = (circleRadius) => {
    return Math.PI * circleRadius
}

const calcCircumCircle = (circleRadius) => Math.PI * circleRadius

// 3

const temperatureConverter = (temperatureScale, degree) => {
    if (temperatureScale === 'F') {
        return (degree - 32) * (5/9) 
    } else {
        return (degree * (9/5)) + 32
    }
}

// 3 Alternativa con operador ternario

const temperatureConverter = (temperatureScale, degree) => {
    temperatureScale === 'F' ?
        (degree - 32) * (5/9) :
        (degree * (9/5)) + 32
}

// 4 

const getFactorial = (numberFactorial) => {
    let total = 1
    for(let count = 1; count <= numberFactorial; count++) {
        total = total + count
    }
    return total
}

const resultGetFactorial = getFactorial(3)
console.log(resultGetFactorial)


function Multiplication(stringOfNumbers = '987') {

    for (let i = 0; i <= stringOfNumbers.length - 1; i++) {
        for (let a = 1; a <= 10; a++) {
            console.log(`${stringOfNumbers[i]} x ${a} = ${stringOfNumbers[i]*a}`);
        }
    }
}

const multiplicationArray = [1,4,7]
for (let i = 0; i < multiplicationArray.length ; i ++){
    console.log(multiplicationArray[i])
    for(let a = 1; a <= 10; a++){
        console.log(`${multiplicationArray[i]} x ${a} = ${multiplicationArray[i]*a}`);
    }
}

