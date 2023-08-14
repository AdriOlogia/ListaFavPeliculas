import Storage from './storage.js'
import Listado from './listado.js'
import Modal from './modal.js'

export default function(){

    let storage = new Storage()
    let listado = new Listado()


    let data_storage = storage.getData()
    
    let inputSearch = document.querySelector( "#search" ).value;
    let btnSearch = document.querySelector( "#btnSearch" );
    let cuerpo_cartas = document.querySelector( "#bodyCards" )

    btnSearch.onclick = (e)=>{
        e.preventDefault()

        let SearchinDataStorage = data_storage.filter( elem => elem.titulo.toLowerCase().includes( inputSearch.toLowerCase() )  )

        if( SearchinDataStorage.length <= 0 ){

            cuerpo_cartas.innerHTML = `
                <div class="col-lg-12"> <h1 class="text-center mt-3">No hay información al respecto</h1> </div>
            `
            setTimeout( ()=>{
                listado.showList( data_storage )
            }, 2000 )
        }else{
            listado.showList( SearchinDataStorage )
        }

        return false
    }
}