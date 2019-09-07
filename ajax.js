console.log(`hola mundo`)
//Botom Personaje
$("#btn-personajes").click(function () {

    //console.log("clic personaje")
    consultarPersonaje()
    console.log("Siguiente Linea")
})


// consulta los personajes y los muestra en html
function consultarPersonaje() {
    $.ajax({

        method: "GET",
        url: "https://rickandmortyapi.com/api/character/"
    })
        .done(function (response) {
            console.log("**Respiuesta**", response)
            var personajes = response.results

            for (var personaje of personajes) {
                console.log("personaje", personaje)
                $(".contenedor-personajes").append(
                    renderizarPersonaje(personaje)
                )

            }
        })

        .fail(function (error) {

            //console.log("hubo un error", error.responseText)

            console.log("hubo un error", JSON.parse(error.responseText).error)

        })

}

function renderizarPersonaje(obj_Personaje) {
    var personaje_html = `
       <div class = "personaje">
          <img src="${obj_Personaje.image}"/>
          <h3>${obj_Personaje.name}</h3>
          <button> + Favorito </button>
       </div>
    `
    return personaje_html
}

// Capturar boton favortito

$("#btn-favoritos").click(function(){

    
})