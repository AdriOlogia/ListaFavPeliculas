import Storage from './storage.js'
import Listado from './listado.js'

export default function(){

    let storage = new Storage()
    let listado = new Listado()

    let data_storage = storage.getData()
    let itemCards = document.querySelectorAll( ".item-pelicula" )

    itemCards.forEach( elem => {
        let cardTitle = elem.querySelector( ".card-title" )
        let cardText = elem.querySelector( ".card-text" )
        let buttonEdit = elem.querySelector( "#edit" )
        let cardBody = elem.querySelector(".card-body")

        
        buttonEdit.onclick = function(){
            
            const data_button_id = parseInt(this.getAttribute("data-id"))

            buttonEdit.remove()
            elem.querySelector(" #delete ").remove()
            let EditForm = `
            <form class="d-flex flex-column">                
                <input id="edit-title" class="form-control mb-1" type="text" placeholder="Titulo" aria-label="Titulo" value=${cardTitle.innerHTML}>
                <textarea id="edit-description" style="height:10px" class="form-control mb-1" type="" placeholder="Descripcion" aria-label="Descripcion">${cardText.innerHTML}</textarea>
                <div div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button id="update" class="btn btn-primary btn-sm mt-1">Actualizar</button>
                </div>
            </form>
            `
            cardBody.innerHTML += EditForm
            
            let buttonUpdate = document.querySelector( "#update" )

            buttonUpdate.onclick = function(e){ 
                e.preventDefault();

                let data_index = data_storage.findIndex( elem => elem.id === data_button_id)
                
                data_storage[data_index] = {
                    id: data_button_id,
                    titulo:  document.querySelector("#edit-title").value,
                    descripcion: document.querySelector('#edit-description').value
                }
                
                storage.saveData( data_storage )
                
                listado.showList( data_storage )

                return false
            }
        }

    } )

}