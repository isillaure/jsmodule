
// 1.
// si el usuario no tiene la cookie sessionuser
// Redireccionarlo al /login.html
// si tiene la cookie sessionuser
// redireccionarlo a /user.html

const pushed_log_in = () => {
    if (document.querySelector('#user_name').value.length != 0 && document.querySelector('#password').value.length != 0) {
        document.cookie = 'logged=true'
    } else {
        if (document.querySelector('#user_name').value.length == 0){
            console.log('Usuario no válido')
        } else {
            console.log('Constraseña no válida')
        }
    }
}

const CheckLogIn = () => {
    if (document.cookie.includes('logged=true')) {
        if (location.pathname !== "/user.html") {
            location.pathname = "/user.html"
        }
    }else {
        if (location.pathname !== "/login.html") {
            location.pathname = "/login.html"
        }
    }
}

window.addEventListener('load', CheckLogIn)


// 2.
// Crear un div con un mensaje de
// “Este sitio se ve mejor en desktop”
// si el viewportWidth es <= 767
// aparecer el mensaje
// sino
// desaparecer el mensaje
// utilizar css
// no usar inline styles


const show_msn = () => {
    if (window.innerWidth <= 767) {
        document.querySelector('.msn').classList.remove('d-none')
        document.querySelector('.msn').classList.add('d-block')
    } else {
        document.querySelector('.msn').classList.remove('d-block')
        document.querySelector('.msn').classList.add('d-none')
    }
}

window.addEventListener('resize', show_msn)