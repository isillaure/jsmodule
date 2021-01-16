// $(function(){
//     console.log('Document ready')
//     $('body h1').after(`<div></div>`)
//     $('body').find(`div`).addClass('list')

//     $('body').after(`
//     <ol>
//     <li> Item 1</div>
//     <li> Item 2</div>
//     <li> Item 3</div>
//     <li> Item 4</div>
//     <li> Item 5</div>
//     </ol>`)
// })

//Selectores
//$(selector).action
// $('.list_item').click()
// $('list_item').mouseenter()
// $('list_item').focus()
// $('list_item').css()
// $('list_item').attr('atributo', 'valor')
// $('list_item').fadeIn()
// $('list_item').fadeOut()
// $('list_item').blur()
// $('list_item').slideDown(2000)

// //Top, left, right, botton, z-index necesitan posicionar primero.
// $('list_item').css('position', 'relative')
// $('list_item').animate({top: '100px'})

// //400 milisegundos es el tiempo estándar 

// //Añadir clases
// $('body ol li').addClass('list_item')
// $('body ol li').removeClass('list_item')
// $('body ol li').toggleClass('list_item')

// //Agregar evento
// $('#show').click(function(){
//     //show,slideDown,fadeIn...
//     $('.contenido').fadeIn()
// })

// $('#hide').click(function(){
//     $('.contenido').fadeOut()
// })

// //Getter
// $('.list_item:first').attr('data-id')
// //Setter
// $('.list_item:first').attr('data-otro', 'stuff')

// //Obtener valores
// $('#idkoder').val()
// //Dar valores
// $('#idkoder').val('o')


// Ejercicios
// Del listado "#vacations"
// 1.  Seleccionar elementos de tipo 'h2' y cambiar el color

$('h2').css('color','red').text('Ola ke ase')

// 2.  Selecciona aquellos ítems que tenga la clase .america y modificar el color

$('.america').css('color','#024da1')

// 3.  Modificar el precio de todos los vuelos para que ahora sea $199.99

$('.details').text('$199.99')

// 4.  Modifica todos los títulos de las vacaciones (h2), su nuevo valor será "Titulo de tu agrado".
// Del listado sorting
// 1. Cuando le den click al link de America, Europe o Asia
//     Filtrar del listado "#vacations" filtrar los li con la clase America, Europe o Asia
//     y ocultar los demás
// 2. Si le dan click a todos
//     Filtrar del listado "#vacations" filtrar los li con la clase America, Europe y Asia

$('.sorting a').click(function(){
    let continent = $(this).text()
    if(continent === 'Todos') {
        $('#vacations .vacation').show()
    } else {
        $('#vacations .vacation').hide()
        $(`#vacations .${continent.toLowerCase()}`).show()
    }
})

/**
 * Del listado Faq
 * 1. Al cargar la pagina, mostrar la pregunta 1
 * 2. Al dar click en head__faq aparecer la descripcion de la pregunta
 *      y desaparecer las descripciones que esten mostradas
 */

$('.desc__faq').hide()
$('.desc__faq:first').show()

$('#vacations .europe').click(function(event){
    event.preventDefault()
    $('.desc__faq').hide()
    $(this).next().show()
})
