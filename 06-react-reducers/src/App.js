import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';
import FormExample from './components/FormExample';
import ContadorMejorado from './components/ContadorMejorado';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div>
      <h1>useReducer</h1>
      <hr/>
      <ShoppingCart/>
      <hr/>
      <Contador/>
      <hr/>
      <ContadorMejorado/>
      <hr/>
      {/*<FormExample/> */}
    </div>
  );
}

export default App;
