let lista = document.createElement("ul")
let texto = document.createTextNode('Soy una lista')
title.appendChild(texto)
document.getElementById('contenedor').appendChild(lista)

let elementoLista1 = document.createElement("li")
let texto2 = document.createTextNode('Soy un elemento de lista')
elementoLista1.appendChild(texto2)
document.getElementById('lista').appendChild(elementoLista1)

let elementoLista2 = document.createElement("li")
let texto3 = document.createTextNode('Soy un elemento de lista')
elementoLista2.appendChild(texto2)
document.getElementById('lista').appendChild(elementoLista2)

let vinculo1 = document.createElement("a")
let texto4 = document.createTextNode('Soy un vínculo')
vinculo1.appendChild(elementoLista1)
document.getElementById('elementoLista1').appendChild(vinculo1)

let vinculo2 = document.createElement("a")
let texto5 = document.createTextNode('Soy un vínculo')
vinculo1.appendChild(elementoLista2)
document.getElementById('elementoLista2').appendChild(vinculo2)

//innerhtml

let box = document.getElementById('contenedor')

box.innerHTML = `
<ul>
<li><a href="">item 1</a></li>
<li><a href="">item 2</a></li>
</ul>`

// iteración del mismo ejercicio

let ulElement = ''

for(let i = 1; i <= 9; i++){
    ulElement += `<li><a href="">item ${i}</a></li>`
}

console.log(ulElement)
let box = document.getElementById('contenedor')
box.innerHTML = ulElement

const addElements = (selector, numberElements)
addElements('.sinclase', 20)