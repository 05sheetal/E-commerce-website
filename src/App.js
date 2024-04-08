import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';


function App() {
  return (
    <div>
      <BrowserRouter>
     <Navbar></Navbar>
      </BrowserRouter>
  
      
    </div>
  );
}

export default App;
