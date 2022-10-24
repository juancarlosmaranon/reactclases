import './App.css';
import Contador from './components/Contador';
import DibujosComplejos from './components/DibujosComplejos';
import DibujoComplejoArray from './components/DibujoComplejoArray';
import HijoDeportes from './components/HijoDeportes';
import PadreDeportes from './components/PadreDeportes';
import NumerosHijo from './components/NumerosHijo';
import NumerosPadre from './components/NumerosPadre';
import Comics from './components/Comics';

function App() {
  return (
    <div className="App">
      {/* <Contador Inicio="1"/>
      <Contador Inicio="5"/>
      <Contador Inicio="11"/>
      <DibujosComplejos/> 
      <DibujoComplejoArray/>
      <PadreDeportes/>
      <NumerosPadre/>*/}
      <Comics/>
    </div>
  );
}

export default App;
