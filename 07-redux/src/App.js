import logo from './logo.svg';
import './App.css';
import { Provider as Provider1} from 'react-redux';
import { Provider as Provider2} from 'react-redux';
import store2 from './store';
import Contador from './components/Contador';
import ShoppingCart from './components/ShoppingCart';
import  CrudApi from './components/CrudApi';
import store1 from './store/store';
import Counter from './components/Counter';

function App() {
  return (
    
      <div >
        <Provider1 store={store1}>
          <h2>Redux</h2>
          <hr/>
          <Counter/>
        </Provider1 >
        
        <Provider2 store={store2}>
          <hr/>
          <CrudApi/>
          <hr/>
          <ShoppingCart/>
          <hr/>
          <Contador/> 
          <hr/>
        </Provider2>
      </div>
     
    
  );
}

export default App;
