import './App.css';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Create } from './components/Create/Create';
import { NavBar } from './components/NavBar/NavBar';
import { Route } from 'react-router-dom'; // para poder rutear
import logoFittNet from './images/logo_fitnet.jpg'



function App() {
  return (
    <>
      <Route exact path = '/'>
        <NavBar/>
        <div className="App">
          <h1>FittNet</h1>
          <img height="200" src={logoFittNet} /> 
        </div>
      </Route>

      <Route path = '/home'>        
        <Home/>
      </Route>

      <Route path = '/login'>
        <Login/>               
      </Route>

      <Route path = '/create'>
        <Create/>
      </Route>
    </>
    
  
    
  );
}

export default App;
