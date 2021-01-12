const usersrc = 'https://jsonplaceholder.typicode.com/users'
const postsrc = 'https://jsonplaceholder.typicode.com/posts'

// 0 = No inicializado
// 1 =  Cargando
// 2 = Cargado
// 3 = Interactivo
// 4 = Completado

const loadUsers = () => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
            return
        } else {
            if (request.status >= 200 && request.status <= 299) {
                const response = request
                const objectResponse = JSON.parse(response.responseText)
                let listUsers = ''
                objectResponse.forEach(user => {
                    listUsers += `<li>${user.name}, ${user.phone} <a href="${user.phone}">Ir a su sitio web</a></li>`
                });
                document.querySelector('.users').innerHTML = listUsers
            }
        }
    })
    request.open('GET', usersrc)
    request.send()
}
// loadUsers()
window.addEventListener('load', loadUsers)

 // Reciclar la función anterior para llamar a usuario y posts
const getUsers = document.getElementById('getUsers')
const deleteUsers = document.getElementById('deleteUsers')
const getPosts = document.getElementById('getPosts')
const deletePosts = document.getElementById('deletePosts')

const getData = (selector) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
            return
        } else {
            if (request.status >= 200 && request.status <= 299) {
                const response = request
                const objectResponse = JSON.parse(response.responseText)
                selectData(selector, objectResponse)
            }
        }
    })
    request.open('GET',selector === 'users'?usersrc:postsrc)
    request.send()
}

const selectData = (selector, arrData) => {
    let listData = ''
    if (selector === 'users') {
        arrData.forEach(element => {
            listData += `<li>${element.name}, ${element.phone} <a href="${element.phone}">Ir a su sitio web</a></li>`    
        })
        document.querySelector('.users').innerHTML = listData
    } else {
        arrData.forEach(element => {
            listData += `<li><h1>${element.title}</h1><p>${element.body}</p></li>`
        })
        document.querySelector('.posts').innerHTML = listData
    }
}
// getUsers.addEventListener('click', function(){
//     getData('users')
//     document.querySelector('#deleteUsers').classList.remove('d-none')
// })
// getPosts.addEventListener('click', function(){
//     getData('posts')
//     document.querySelector('#deletePosts').classList.remove('d-none')
// })

const deleteData = (selector) => {
    document.querySelector(selector).innerHTML = ''
}

deleteUsers.addEventListener('click', function() {
    deleteData('.users')
    deleteData('.container')
    document.querySelector('#deleteUsers').classList.add('d-none')
})

deletePosts.addEventListener('click', function() {
    deleteData('.posts')
    deleteData('#second-cont')
    document.querySelector('#deletePosts').classList.add('d-none')
})