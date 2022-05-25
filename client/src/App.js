import './App.css';
import {Route, Routes} from 'react-router-dom';
import Landing from './Components/Landing/Landing';

import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import { Create } from './components/Create/Create';
import { NavBar } from './components/NavBar/NavBar';
import logoFittNet from './images/logo_fitnet.jpg'



function App() {
  return (
    <div className="App">

        <div className="App">
          <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />

          
          FittNet
          </Routes>      
        </div>
      
    </div>

  );
}

export default App;
