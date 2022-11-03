//npm install -s reactstrap para instalar bootstrap para react, necesario cada vez que tengamos que instalar algo
import './App.css';
import { useState } from 'react';
import Formulario from './Componentes/Formulario';
import ListaTareas from './Componentes/ListaTareas';
import Titulo from './Componentes/Titulo';

function App() {
  const [list, setList] = useState([]);

  const handleAddItem = addItem => {
    setList([...list, addItem]);
  }
  return (
    <div className="container">
      <div className="m-0 w-100 h-100 row justify-content-center">
        <div className="col-auto w-100 p-5"></div>
          <Titulo propietario="Miguel" />
          <hr />
          <Formulario propietario="Miguel" handleAddItem={handleAddItem} />
          <ListaTareas propietario="Miguel" lista={list} setList={setList} />
        </div>
    </div>
  );
}

export default App;
