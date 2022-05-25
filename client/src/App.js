import './App.css';
import {Route, Routes} from 'react-router-dom';
import Landing from './Components/Landing/Landing';

import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';



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
      

        {/* <Route exact path = '/'>
          <NavBar/>
          <Landing/>
          FittNet
        </Route>

       
        <Route path = '/create'>
          <Create/>
        </Route>   */}


      
    </div>

  );
}

export default App;
