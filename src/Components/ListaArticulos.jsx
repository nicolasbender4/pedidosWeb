import { useEffect, useState } from "react";
import { Articulo } from "./articulo";

const ListaArticulos = () => {

  const[articulos,setArticulos] = useState([]);

  useEffect(() => {
    fetch("./json/articulos.json")
    .then(response => response.json())
    .then(datos => {
      setArticulos(datos)
    })
  },[])
  
  console.log(articulos);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
           <tr>
             <th scope="col" className="p-4">
               <div className="flex items-center">
                 <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-2 py-2">
              Descripcion
            </th>
            <th scope="col" className="text-center px-2 py-2">
              Hay Stock
            </th>
            <th scope="col" className="text-center px-2 py-2">
              Stock
            </th>
            <th scope="col" className="text-center px-2 py-2">
              Precio
            </th>
            <th scope="col" className="text-center px-2 py-2">
              Cantidad
            </th>
            <th scope="col" className="text-center px-2 py-2">
              Precio por Cant.
            </th>
            <th scope="col" className="text-center px-2 py-2">
              Acciones
            </th>
          </tr>
        </thead>
    
       
        <tbody>
          {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17
            </th>
            <td className="px-6 py-4">Si</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">0</td>
            <td className="px-6 py-4">
              <input type="text" name="" className="" alt="Ingrese cantidad" />
            </td>
            <td className="px-6 py-4">15</td>
          </tr> */}

          
            {articulos.map((articulo) => (
                //<Articulo key={articulo.internoarticulo} articulo={articulo} />
                  <Articulo key={articulo.internoarticulo} />
                //<Articulo key={articulo.internoArticulo} idArticulo={articulo.idArticulo} descripcion={articulo.descripcion} Precio={articulo.Precio} />
            ))}

{/* {articulos.length ? ( */}
          {/* ): <h2>No hay artículos</h2>} */}
          
          {/* <Articulo articulo={articulo}/>  */}


          {/* {articulos.map((art, key) => (
              <Articulo key={key} internoArticulo={art.id} idArticulo={art.idArticulo} descripcion={art.descripcion} Precio={art.Precio} />
              <h1 key={key}>{art.descripcion}</h1>
            //  <tr key={art.internoArticulo}>
            //   <td>ID: {art.internoArticulo  }</td>
            //   <td>Descripcion: {art.descripcion}</td>

            //  </tr>
          )

          )} */}
          
          
        </tbody>
        <tfoot>
          {/* FOOTER */}
          FOOTER
        </tfoot>
      </table>
    </div>
  );
};

export { ListaArticulos };
