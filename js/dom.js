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

const kodersArr = ['ale', 'oscar', 'ruben', 'brian']
addElements(.'sinclase', 4, kodersarr)


/**
 * onchange() lo tiene que disparar el selector
 * get value option selected 
 * document.getElementById('orden').value
 * 1 función
 * 1 metodo
 * usar innerHTML
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
 */