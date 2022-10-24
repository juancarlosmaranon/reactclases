import React, { Component } from 'react'

class HijoDeportes extends Component {

    elegirfavorito(){
        var deporte = this.props.nombre;
        this.props.seleccionarFavorito(deporte);
    }
    //ALMACENAMOS DENTRO DEL STATE UN ARRAY DE STRING
    //DE STRING (nombres)

    render(){
        return(
            <div>
                <h1 style={{color:"blue"}}>Hijo Deporte: {this.props.nombre}
                </h1>
                
                <button onClick={()=>this.elegirfavorito()}>
                    Seleccionar favorito
                </button>
            </div>
        )
        
    }
  
}

export default HijoDeportes;
