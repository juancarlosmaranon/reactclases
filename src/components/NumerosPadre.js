//SE IMPORTA COMPONENT PARA HACER CLASES
import {Component} from 'react';
//SE IMPORTA NumerosHijo PARA PODER USARLO EN CREARHIJOS();
import NumerosHijo from '../components/NumerosHijo';
//SE CREA LA CLASE DE PADRE NUMERO
class NumerosPadre extends Component {
    //SE GUARDA EN EL STATE, LA SUMA DE LOS NUMEROS, Y LOS HIJOS CREADOS MEDIANTE LA FUNCION NUEVOHIJO();
    state = {
        suma: 0,
        hijos: []
    };
    //SE CREA LA FUNCION SUMARNUMERO PARA PODER PASARLA AL NumerosHijo DENTRO DE CREARHIJOS(); , DONDE SE LE PASA UN NUMERO
    //EN ESTE CASO, EL NUMERO SE ENCUENTRA EN EL VALOR, DENTRO DE NumerosHijo EN CREARHIJOS();
    sumarNumero = (numero) => {
        //SE MODIFICA EL STATE DE SUMA , Y LE DECLARAMOS QUE SEA LA SUMA DEL NUMERO RECIBIDO + LA RECOGIDA DEL VALOR ACTUAL DE SUMA
        this.setState({
            suma: (numero+this.state.suma)
        });
    };
    //SE CREA LA FUNCION NUEVOHIJO PARA PODER AÑADIR UN NUEVO NUMERO A LA HORA DE PULSAR EN EL BOTON CREADO EN EL RETURN DE RENDER
    nuevoHijo = () => {
        //SE GUARDA EN EL STATE, TODOS LOS ELEMENTOS QUE ESTABAN ANTERIORMENTE EN HIJOS, RECOGIENDO TODO EL ARRAY, Y LE AÑADIMOS EL NUEVO NUMERO
        this.setState({
            hijos: [...this.state.hijos, Math.trunc(Math.random()*100)]
        });
        //SE VUELVE A LLAMAR A CREARHIJOS(); PARA QUE AÑADA EL NUEVO ELEMENTO CREADO Y SE PUEDA SUMAR
        this.crearHijos();
    };
    //SE CREA LA FUNCION CREARHIJOS PARA MOSTRAR EL PARRAFO CON EL NUMERO HIJO, Y EL NumerosHijo, PARA POSTERIORMENTE, CREAR EL BOTON DENTRO DE 
    //NumerosHijo.JS
    crearHijos = () => {
        //SE CREA EL ARRAY VACIO, QUE CONTENDRA LOS ELEMENTOS HTML QUE SE AÑADIRAN DENTRO DEL RETURN DE RENDER, EN LA FUNCION CREARHIJOS();
        var arrayDevo = [];
        //SE REALIZA UN BUCLE FOR DESDE 0 Y HASTA LA LONGITUD DEL ARRAY DE LOS HIJOS ALMACENADOS EN EL STATE PARA SABER CUANTOS ELEMENTOS DEBEMOS AÑADIR
        for (var i=0; i < this.state.hijos.length; i++){
            //SE HACE UN PUSH (AÑADIR ELEMENTO A ARRAY) DEL ARRAY CREADO, DONDE INCLUIMOS UN DIV, QUE A SU VEZ CONTIENE UN PARRAFO P, CON EL VALOR DE 
            //THIS.STATE.HIJOS[i] (ELEMENTO ACTUAL DEL ARRAY QUE RECORREMOS CON FOR) , Y ADEMAS , EL ELEMENTO HIJO NUMERO, QUE LE PASAMOS DOS PROPS
            //LA PRIMERA PROP ES EL METODO DE SUMARNUMERO, QUE NOS PERMITIRA ACTUALIZAR LA SUMA DESDE EL ELEMENTO HIJO (VER NumerosHijo.JS)
            //LA SEGUNDA ES EL VALOR DE THIS.STATE.HIJOS[i], QUE NOS PERMITIRA ACTUALIZAR LA SUMA DESDE EL ELEMENTO HIJO (VER NumerosHijo.JS)
            arrayDevo.push(<div key={i}><p>Numero hijo: {this.state.hijos[i]}</p><NumerosHijo metodo={this.sumarNumero} valor={this.state.hijos[i]}/></div>);
        }
        //UNA VEZ ACABADO EL ARRAY, SE DEVUELVE EL ELEMENTO CREADO, PARA QUE SE AÑADA EN EL RETURN DE LA FUNCION RENDER
        return arrayDevo;
    }
    //SE CREA LA FUNCION RENDER PARA DEVOLVER EL CODIGO QUE CONTENDRA LA ETIQUETA <NumerosPadre/> SI SE USA EN OTRA CLASE
    render() {
        //SE DEVUELVE EL CODIGO QUE VA A MOSTRAR EL HTML
        return (
        <div>
            <h1>Suma numeros padre</h1>
            <h2 style={{color:"red"}}>La suma es: {/*VALOR DEL STATE QUE SE ACTUALIZARA MEDIANTE LOS HIJOS (VER NumerosHijo.JS)*/this.state.suma}</h2>
            <button onClick={ /*FUNCION QUE CREARA EL NUEVO HIJO (VER LINEA 26)*/ () => this.nuevoHijo() }>Crear nuevo numero</button>
            {/*FUNCION QUE MOSTRARA LOS NUMEROS QUE SE ENCUENTRAN EL EL STATE (VER LINEA 40)*/this.crearHijos()}
        </div>
        );
    }
}
//SE EXPORTA LA CLASE NumerosPadre POR DEFECTO
export default NumerosPadre;