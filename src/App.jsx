//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import { BtnBuscar } from "./Components/BtnBuscar";
import { ListaArticulos } from "./Components/ListaArticulos";
import { PedidoArticulos } from "./Components/PedidoArticulos";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <div className="flex">
        <div className="w-1/2 relative overflow-x-auto shadow-md sm:rounded-lg m-2 p-2">
          {/* Lista de Artículos */}
          <h1 className="text-3xl font-bold underline text-red-500 mb-8">
            Listado de Artículos
          </h1>
          
          <BtnBuscar />
          <ListaArticulos />
        </div>
        <div className="w-1/2 relative overflow-x-auto shadow-md sm:rounded-lg m-2 p-2">
          {/* Lista de Pedido */}
          <h1 className="text-3xl font-bold underline text-red-500 mb-8">Pedido</h1>
          <PedidoArticulos />
        </div>
      </div>
    </div>
  );
}

export default App;
