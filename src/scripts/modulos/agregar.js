import Storage from "./storage.js"
export default class Agregar{

    constructor(){
        this.storage = new Storage();

        this.titulo_pelicula = document.querySelector( "#tituloPelicula" ),
        this.descripcion_pelicula = document.querySelector( "#descripcionPelicula" )
        this.boton_agregar = document.querySelector( "#Agregar" )
        this.cuerpo_cartas = document.querySelector( "#bodyCards" )
    }

    addMovie(){
        this.boton_agregar.addEventListener( "click" , (event) =>{
            event.preventDefault();

            let pelisLocalStorage = this.storage.getData();
            let lastID = this.storage.getLastID()

            console.log(pelisLocalStorage, lastID)

            let titulo = this.titulo_pelicula.value;
            let descripcion = this.descripcion_pelicula.value;

            if( titulo === "" || descripcion === "" ){
                alert( "no se pudo guardar una carta" )
            }else{

                let pelicula_to_localstorage = {
                    id: lastID++,
                    title : titulo,
                    description : descripcion
                }

                pelisLocalStorage.push( pelicula_to_localstorage )

                this.storage.saveData( pelisLocalStorage )

                this.cuerpo_cartas.innerHTML += `
                    <div class="col-lg-3 m-1">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${titulo}</h5>
                        <p class="card-text">${descripcion}</p>
                        </div>
                    </div>
                    </div>
                `
            }            
        } )
    }

    deleteMovie(){

    }
} 