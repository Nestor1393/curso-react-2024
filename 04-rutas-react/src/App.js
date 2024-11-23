import { Link } from 'react-router-dom';
import ConceptosBasicos from './components/ConceptosBasicos';

function App() {
  return (
    <div >
      <h1>React router</h1>
      <a href='https://v5.reactrouter.com/web/guides/quick-start' target='_blank' rel='noreferrer'>Documentación</a>
      <hr/>
      <ConceptosBasicos/>
    </div>
  );
}

export default App;
