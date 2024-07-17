
import './App.css';
import ComCreateSilo from './components/Silo/CreateSilo';

import ComShowSilos from './components/Silo/ShowSilo';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<ComShowSilos/>}/>
              <Route path='/create' element={<ComCreateSilo/>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
