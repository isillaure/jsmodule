// $(document).ready(function () {
//     $("#myInput").on("keyup", function () {
//         var value = $(this).val().toLowerCase();
//         $("#myTable tr").filter(function () {
//             $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//         });
//     });
// });

$('#busqueda').keyup(function){
    let term = $$(this).val()
    $('#ciudades li').hide()
    let ciudades = $("ciudades li")
    for(item of ciudades){
        console.log(item)
        if (item.innerText.toLowerCase().search(termin.toLowerCase) !== -1) {
            $(item).show()
        }
    }
    $("#ciudades li").each(id, elem) => {
        if (elem.innerText.toLowerCase().search(term.toLowerCase()) !== -1)
        $("#ciudades li").eq(id).show()
    }
}



