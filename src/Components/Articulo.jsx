const Articulo = () => {
  //const { internoArticulo, idArticulo, descripcion, precio } = props;
//const { internoarticulo, idArticulo, descripcion, precio} = articulo;

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Articulo 
        </th>
        <td className="text-center px-1 py-1">Si</td> {/* Hay Stock? */}
        <td className="text-center px-1 py-1">15</td> {/* Unidades en Stock */}
        <td className="text-center px-1 py-1">$234,66</td> {/* Precio */}
        <td className="text-center px-1 py-1">
          <input
            type="text"
            name=""
            className="text-center w-16"
            alt="Ingrese cantidad"
            placeholder="Cantidad"
          />
          {/* Cantidad */}
        </td>
        <td className="text-center px-1 py-1">0</td> {/* Precio por Cantidad */}
        <td className="px-1 py-1 flex">
          <button className="bg-transparent hover:bg-amber-500 text-amber-700 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded" type="submit">
            Info
          </button>
          <button className="ml-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded " type="submit">
            Agregar
          </button>
        </td>
        {/* Acciones */}
      </tr>
      {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Apple MacBook Pro 17
        </th>
        <td className="text-center px-1 py-1">Si</td> {/* Hay Stock? * /}
        <td className="text-center px-1 py-1">15</td> {/* Unidades en Stock * /}
        <td className="text-center px-1 py-1">$2999</td> {/* Precio * /}
        <td className="text-center px-1 py-1">
          <input
            type="text"
            name=""
            className="text-center w-16"
            alt="Ingrese cantidad"
            placeholder="Cantidad"
          />
          {/* Cantidad * /}
        </td>
        <td className="text-center px-1 py-1">0</td> {/* Precio por Cantidad * /}
        
        <td className="px-1 py-1 flex">
          <button className="bg-amber-400 p-2 rounded mx-1" type="submit">
            Info
          </button>
          <button className="bg-cyan-500 p-2 rounded mx-1" type="submit">
            Agregar
          </button>
        </td>
        {/* Acciones * /}
      </tr>

      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Microsoft Surface Pro
        </th>
        <td className="text-center px-1 py-1">No</td>
        <td className="text-center px-1 py-1">0</td> {/* Unidades en Stock * /}
        <td className="text-center px-1 py-1">$300</td>
        <td className="text-center px-1 py-1">
          <input
            type="text"
            name=""
            className="text-center w-16"
            alt="Ingrese cantidad"
            placeholder="Cantidad"
          />
          {/* Cantidad * /}
        </td>
        <td className="text-center px-1 py-1">0</td> {/* Precio por Cantidad * /}
        <td className="text-center px-1 py-1 flex">
          <button className="bg-amber-400 p-2 rounded mx-1" type="submit">
            Info
          </button>
          <button className="bg-cyan-500 p-2 rounded mx-1" type="submit">
            Agregar
          </button>
        </td>{" "}
        {/* Acciones * /}
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Magic Mouse 2
        </th>
        <td className="text-center px-1 py-1">Si</td>        {/* Hay * /}
        <td className="text-center px-1 py-1">12</td>        {/* Stock * /}
        <td className="text-center px-1 py-1">$99</td>       {/* Precio * /}
        <td className="text-center px-1 py-1">  
          <input    
            type="text"
            name=""
            className="text-center w-16"
            alt="Ingrese cantidad"
            placeholder="Cantidad"
          />          {/* Cantidad * /}
        </td>
        <td className="text-center px-1 py-1">0</td>        {/* Precio por Cantidad * /}
        <td className="text-center px-1 py-1 flex">         {/* Acciones * /}    
          <button className="bg-amber-400 p-2 rounded mx-1" type="submit">
            Info
          </button>
          <button className="bg-cyan-500 p-2 rounded mx-1" type="submit">
            Agregar
          </button>
        </td>        
      </tr> */}
    </>
  );
};
export { Articulo };
