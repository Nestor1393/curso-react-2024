import Contador from './components/Contador';


function App() {
  return (
    <div>
      <h1>Memorización</h1>
      <hr/>
      <p>React.memo</p>
      <ul>
        <li>Se encarga de memorizar un componente.</li>
        <li>Lo vuleve a memorizar al momento de que sus props cambian.</li>
        <li>evita re-renderizados</li>
        <li>hay que evitarlo en la medida de lo posible, pues podría ser más costosa la tarea de
            memorización que el re-renderizado del componente.
        </li>
        <li>usalo, cuando:

        </li>
        <ul>
          <li>Temenos muchos elementos renderizados en una lista</li>
          <li>Llamanos datos de APIs</li>
          <li>Un componente se vuelve muy pesado</li>
          <li>Salen alertas de rendimiento en la consola</li>
        </ul>

      </ul>
      <hr/>
      <p>useCallback</p>
      <ul>
        <li>Memoriza una función para no tener que volverla a definir en cada render</li>
        <li>usalo siempre que pases como prop una función a un componente memorizado</li>
        <li>usalo siempre que se pase una función como paramentro de un efecto</li>
      </ul>
      <hr/>
      <p>useMeno</p>
      <ul>
        <li>Memriza un valor calculado, es decir el resultado de una función</li>
        <li>Genera propiedades computadas</li>
        <li>usalo en procesos pesados</li>
      </ul>
      <hr/>
      <Contador/>
    </div>
  );
}

export default App;
