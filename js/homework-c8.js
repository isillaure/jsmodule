// Ejercicio 1
// dado el siguiente array de objetos
let users = [{
        firstName: 'Bradley',
        lastName: 'Bouley',
        role: 'Full Stack Resident'
    },
    {
        firstName: 'Chloe',
        lastName: 'Alnaji',
        role: 'Full Stack Resident'
    },
    {
        firstName: 'Jonathan',
        lastName: 'Baughn',
        role: 'Enterprise Instructor'
    },
    {
        firstName: 'Michael',
        lastName: 'Herman',
        role: 'Lead Instructor'
    },
    {
        firstName: 'Robert',
        lastName: 'Hajek',
        role: 'Full Stack Resident'
    },
    {
        firstName: 'Wes',
        lastName: 'Reid',
        role: 'Instructor'
    },
    {
        firstName: 'Zach',
        lastName: 'Klabunde',
        role: 'Instructor'
    }
];
// obtener un nuevo objeto con esta estructura
//-> {
//   'Bradley Bouley': 'Full Stack Resident',
//   'Chloe Alnaji': 'Full Stack Resident',
//   'Jonathan Baughn': 'Enterprise Instructor',
//   'Michael Herman': 'Lead Instructor',
//   'Robert Hajek': 'Full Stack Resident',
//   'Wes Reid': 'Instructor',
//   'Zach Klabunde': 'Instructor'
//   }

const flattenUsers = users => {
    users.reduce((lastValue, currentValue) => {
        let fullName = currentValue.firstName + ' ' + currentValue.lastName
        return (lastValue[fullName] = currentValue.role), lastValue
    }, {})
}
console.log(flattenUsers(users))

//

const joinUsers = users.reduce((newObject, user) => {
    let fullName = user.firstName + ' ' + user.lastName
    newObject[fullName] = user.role
    return newObject
}, {})

// Ejercicio 2
//  tomando el array users,
//  hacer una funcion que reciba 2 parametros (arrayUsers, role)
//  y retorne un array con los usuarios que cumplan con el role

const filterRole = (array, role) =>
    array.filter((currentValue) => currentValue.role === role)

console.log(filterRole(users, "Lead Instructor"))

// Ejercicio 3
// tomando el siguiente array de objetos
let persons = [{
        name: 'Bob',
        age: 30,
        voted: true
    },
    {
        name: 'Jake',
        age: 32,
        voted: true
    },
    {
        name: 'Kate',
        age: 25,
        voted: false
    },
    {
        name: 'Sam',
        age: 20,
        voted: false
    },
    {
        name: 'Phil',
        age: 21,
        voted: true
    },
    {
        name: 'Ed',
        age: 55,
        voted: true
    },
    {
        name: 'Tami',
        age: 54,
        voted: true
    },
    {
        name: 'Mary',
        age: 31,
        voted: false
    },
    {
        name: 'Becky',
        age: 43,
        voted: false
    },
    {
        name: 'Joey',
        age: 41,
        voted: true
    },
    {
        name: 'Jeff',
        age: 30,
        voted: true
    },
    {
        name: 'Zack',
        age: 19,
        voted: false
    }
]
// obtener lo siguiente
// 1. Cantidad de personas que votaron
// 2. Cual es el promedio de Edad de los votantes

//1

const whoVote = (persons) =>
    persons.reduce(
        (lastValue, currentValue) =>
        currentValue.voted === true ? lastValue + 1 : lastValue,
        0
    )
console.log(whoVote(persons));

//2

let averageVoters = persons.reduce((lastValue, currentValue) => {
    return lastValue + currentValue.age
}, 0) / averageVoters.length
console.log(averageVoters)


let numbersReduce = [
    [1, 2, 4],
    [1, 2, 8],
    [1, 9, 3]
]


let sumOfNumbers = numbersReduce.reduce((lastValue, currentValue) => 
    lastValue + currentValue.reduce((lastValue2, currentValue2) => lastValue2 + currentValue2, 0),0)

console.log(sumOfNumbers)