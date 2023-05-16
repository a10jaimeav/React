import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Paginas/Home';
import About from './Paginas/About';
import Navegacion from './Componentes/Navegacion';
import Posts from './Paginas/Posts';
import Post from './Paginas/Post';
//En el path='/post/:postId' solo se llama si trae algo, que sería el :postId
function App() {
  return (
    <BrowserRouter>
    <Navegacion />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/post/:postId' element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
