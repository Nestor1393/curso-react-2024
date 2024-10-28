import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import './index.css';

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <CrudApi/>
      <hr/>
      <CrudApp/>
      <hr/>
    </>
  );
}

export default App;
