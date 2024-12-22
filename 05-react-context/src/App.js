
import CrudApi from './components/CrudApi';
import Mypage from './components/Mypage';
import MypageContext from './components/MypageContext';
import { CrudProvider } from './context/CrudContext';

function App() {
  return (
    <div>
      <h1>React context API</h1>
      <hr/>
      <CrudProvider>
        <CrudApi/>
      </CrudProvider>
      <hr/>
      <MypageContext/>
      <hr/>
      <Mypage/>
    </div>
  );
}

export default App;
