const showHideBox = () => {
    
    if(window.innerWidth <= 767) {
        document.querySelector('.box_mobile').classList.remove('d-none')
        document.querySelector('.box_mobile').classList.add('d-block')
        document.querySelector('.box_desktop').classList.remove('d-block')
        document.querySelector('.box_desktop').classList.add('d-none')
    } else {
        document.querySelector('.box_mobile').classList.remove('d-block')
        document.querySelector('.box_mobile').classList.add('d-none')
        document.querySelector('.box_desktop').classList.remove('d-none')
        document.querySelector('.box_desktop').classList.add('d-block')
    }
}

window.addEventListener('resize', showHideBox)
// sentencias
window.addEventListener('load', showHideBox)

// function
// document.cookie
// si logged=true
// si existe la cookie logged
// Mensaje: Bienvenido
// sino existe
// Mensaje: User is offline
// loguearlo (setear cookie logged=true)

const isLogged = () => {
    if(document.cookie.includes('logged=true')){
        document.querySelector('#session').innerHTML = 'Bienvenido'
    } else {
        document.querySelector('#session').innerHTML = 'User is offline'
        document.cookie = 'logged=true'
    }
}
window.addEventListener('load', isLogged)