import './App.css';
import {Route, Routes} from 'react-router-dom';
import Landing from './Components/Landing/Landing';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Landing/>} />
      
      FittNet
      </Routes>      
    </div>
  );
}

export default App;
