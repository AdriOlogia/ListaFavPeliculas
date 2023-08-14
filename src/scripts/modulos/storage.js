export default class Storage{

    constructor() {
        this.id = 1
    }

    getData(){

        let parsePelis = JSON.parse(localStorage.getItem( "peliculas" ));

        if( !parsePelis || parsePelis.length < 1 ){

            parsePelis = [
                {
                    "id": 0,
                    "titulo":"¿Que puedes hacer?",
                    "descripcion":"AGREGAR LA PELICULA QUE MAS TE GUSTE"
                },
            ]

            this.id = 1

        }else{
            this.id = parsePelis[parsePelis.length - 1].id + 1
        }

        return parsePelis;
    }

    getLastID(){
        return this.id
    }

    saveData( data ){
        localStorage.setItem( "peliculas", JSON.stringify( data ) )
    }
}