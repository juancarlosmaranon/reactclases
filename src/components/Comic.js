import React, { Component } from 'react'

class Comic extends Component {

  render() {
    return (
        <div>
            <h1 style={{color:"red"}}>
                {this.props.titulo}
            </h1>
            <h3 style={{color:"blue"}}>
                {this.props.comic.descripcion}
            </h3>
            <img src={this.props.comic.imagen} alt="" 
            style={{width:"150px", height:"150px"}}></img><br></br>
            <button 
            onClick={()=>{
                this.props.seleccionarFavorito(this.props.comic);
            }}>
                Seleccionar favorito
            </button>
            <button style={{color:"red"}} 
            onClick={()=>{
                var index = parseInt(this.props.index);
                this.props.eliminarComic(index);
            }}>
                Eliminar comic
            </button>
        </div>
    )
  }
}
export default Comic;