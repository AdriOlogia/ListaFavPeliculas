import Agregar from './modulos/agregar.js'

export default class APP {
    
    constructor(){

        this.agregar = new Agregar()

    }

    load(){
        
        console.log("inicializado...")

        this.agregar.addMovie()
    }
    


}