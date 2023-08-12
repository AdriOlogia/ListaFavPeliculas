import Listado from './modulos/listado.js'
import Storage from './modulos/storage.js'

export default class APP {
    
    constructor(){

        this.Listado = new Listado()
        this.storage = new Storage()

    }

    load(){
        
        console.log("inicializado...")

        let peliculas_storage = this.storage.getData()

        this.Listado.showList( peliculas_storage )

        this.Listado.addMovie()

    }
    


}