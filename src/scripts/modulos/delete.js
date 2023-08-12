import Storage from './storage.js'
import Listado from './listado.js'

export default function(){

    let storage = new Storage()
    let listado = new Listado()
    
    let itemCards = document.querySelectorAll( ".item-pelicula" )

    itemCards.forEach( elem =>{

        let btnDelete = elem.querySelector( "#delete" )
        let getStorage = storage.getData()

        btnDelete.onclick= function() {
            const data_delete = this.getAttribute("data-id")
            const filterPelis = getStorage.filter( peliculas => peliculas.id !== parseInt(data_delete) )
            storage.saveData( filterPelis )
            listado.showList(getStorage)
        }
    } )
    
}