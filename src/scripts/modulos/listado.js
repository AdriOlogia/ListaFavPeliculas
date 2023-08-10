import Storage from "./storage.js"

export default class Listado{

    constructor(){
        this.storage = new Storage();
        // elementos del doom
        this.titulo_pelicula = document.querySelector( "#tituloPelicula" ),
        this.descripcion_pelicula = document.querySelector( "#descripcionPelicula" )
        this.boton_agregar = document.querySelector( "#Agregar" )
        this.cuerpo_cartas = document.querySelector( "#bodyCards" )
        this.botonBorrar = document.querySelectorAll( "#bodyCards #botonBorrar" )
    }

    addMovie(){
        this.boton_agregar.addEventListener( "click" , (event) =>{
            event.preventDefault();

            // se consulta el storage y se asigna un id
            let pelisLocalStorage = this.storage.getData(); //devuelve un array
            let lastID = this.storage.getLastID()


            let titulo = this.titulo_pelicula.value;
            let descripcion = this.descripcion_pelicula.value;

            if( titulo === "" || descripcion === "" ){
                alert( "no se pudo guardar una carta" )
            }else{

                let pelicula_to_localstorage = {
                    id: lastID++,
                    titulo : titulo,
                    descripcion : descripcion
                }

                pelisLocalStorage.push( pelicula_to_localstorage )

                this.storage.saveData( pelisLocalStorage )

                this.showList( pelisLocalStorage )
            }
            // limpiamos los inputs
            this.titulo_pelicula.value = ""          
            this.descripcion_pelicula.value = ""
        } )
    }

    cardMovieTemplate( pelicula ){
        this.cuerpo_cartas.innerHTML += `
                    <div id="pelicula-${pelicula.id}" class="col-3 m-1 cardPelicula">
                        <div class="card" style="width: 18rem; height: 10em;">
                            <div class="card-body">
                            <h5 class="card-title">${pelicula.titulo}</h5>
                            <p class="card-text">${pelicula.descripcion}</p>
                            <button id="botonEditar" class="btn btn-primary">Editar</button>
                            <button id="botonBorrar" class="btn btn-danger">Borrar</button>
                            </div>
                        </div>
                    </div>
                `
    }

    showList( listado_peliculas ){

        this.cuerpo_cartas.innerHTML = "";

        for (const pelicula of listado_peliculas) {
            this.cardMovieTemplate( pelicula )        
            
        }
    }

    deleteCard(){
        console.log(this.botonBorrar)
    }


} 