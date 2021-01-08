let elementos = document.getElementsByClassName('párrafos')
let secondEelement = elementos[1]
secondElement.classList.add('active') // Este no sobreescribe las clases.
secondEelement.setAttribute('class', 'párrafos párrafo2') //En esta sí se sobreeescriben las clases.
let bytag = document.getElementsByTagName('section') // Devuelve los elementos por su tag.

bytag[0].classList.add('section_parrafo') //Accede por posición.

let querySelectorAll = document.querySelectorAll('.secciones')

const addElements = (arrNames) => {
    arrNames.forEach(element, index => {
        document.getElementById(selector).innerHTML = 

    })
}

const kodersArr = ['Ale', 'ale2', 'alejandra','oscar','ruben', 'brian']

// Exercise
const addElements = (selector,numberElements, arrNames) => {
    let listKoders = ''
    arrNames.forEach((koder, index) => {
        if(index < numberElements ) {
            listKoders += `<li>Koder ${index + 1}: ${koder}</li>`
        }
    })
    document.querySelector(selector).innerHTML = listKoders
}

// Exercise filter
const filterKoders = (letter) => {
    let filtrados = kodersArr.filter((koder)=> {
        return koder.toLowerCase().startsWith(letter.toLowerCase())
    })
    addElements('#lista', filtrados.length , filtrados)   
}


/**
 * onchange() lo tiene que disparar el selector
 * get value option selected 
 * document.getElementById('orden').value
 * 1 función
 * 1 metodo
 * usar innerHTML
 */

const filterKoderSelectAD = () => {
    let order = document.getElementById('order_list').nodeValue
    let orderArray = kodersArr.sort()
    if(order === 'a'){
        return orderArray
    }else if (order === 'd'){
        return orderArray.reverse()
    }

} 

const filterKodersSelectAZ = (letter) => {
    let filtrados = kodersArr.filter(koder => {
        
    })
}

