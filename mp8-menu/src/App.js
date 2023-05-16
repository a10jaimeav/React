import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Paginas/Home';
import About from './Paginas/About';
import Navegacion from './Componentes/Navegacion';

function App() {
  return (
    <BrowserRouter>
    <Navegacion />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
