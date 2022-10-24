import {Component} from 'react';
class NumerosHijo extends Component {
    state = {};
    render() {
        return (
        <div>
            <button onClick={ ()=>this.props.metodo(this.props.valor) }>Sumar </button>
        </div>
        );
    }
}
export default NumerosHijo;