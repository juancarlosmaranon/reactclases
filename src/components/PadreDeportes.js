import HijoDeportes from './HijoDeportes';
import React, { Component } from 'react'

class PadreDeportes extends Component {

    seleccionarFavorito = (deporte)=>{
        this.setState({
            favorito:deporte
        });
    }
    
    state={
        deportes:["Petanca", "Curling", "Poker", "Padel", "Paintball"],
        favorito: ""
    }

  render() {
    return (
        <div>
            <h1 style={{color:"red"}}>
                Padres Deporte
            </h1>
            <h3 style={{color:"fuchsia"}}>
                Deporte favorito: {this.state.favorito}
            </h3>
            {

                //QUEREMOS DIBUJAR CADA DEPORTE, PERO DIBUJANDO LA 
                //ETIQUETA DEL HIJO
                this.state.deportes.map((deporte,index)=>{
                    return (<HijoDeportes seleccionarFavorito={this.seleccionarFavorito} nombre={deporte} key={index}/>);
                })
            }
        </div>
    )
  }
}

export default PadreDeportes;