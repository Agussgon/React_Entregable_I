// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deb

import Listado from './components/Listado';
import Cabecera from './components/Cabecera';
import data from './components/data.json';
import './index.css'
import { useState } from 'react';


function App() {

 const [carrito,setCarrito]= useState(0);

    return (
      <div className="App">
        <Cabecera carrito={carrito}/>
        <Listado data={data}  carrito={carrito} setCarrito={setCarrito} />
      </div>
    );
}

export default App;

