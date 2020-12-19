let obj = {
    name: 'ruben', 
    lastname: 'flores',
    age: 29,
    fullname: function() {
        return this.name + ' ' + this.lastname
    },
    saltar: function(){
        return `${this.name} está saltando`
    }
}

obj.fullname()
obj.saltar


//this es palabra reservada
//new es palabra reservada para crear un nuevo objeto

let koder = {
    firstName: Nayeli,
    lastname: Gutiérrez,
    age: 27,
    id: 04353,
    slack: isillaure,
    github: isillaure,
    phone: 4443992,
    scholarship: true,
    role: student, 
    assigments: [
    {
        name: HTML,
        grade: 90
    },
    {
        name: JavaScript,
        grade: 90
    },
    {
        name: Python,
        grade: 90
    } 
],
}

const filterRole = (array, role) =>
    array.filter((currentValue) => currentValue.role === role)

console.log(filterRole(users, "Lead Instructor"))

const whoVote = (persons) =>
    persons.reduce(
        (lastValue, currentValue) =>
        currentValue.voted === true ? lastValue + 1 : lastValue,
        0
    )
console.log(whoVote(persons));