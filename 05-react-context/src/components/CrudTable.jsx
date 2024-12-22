import React, { useContext } from 'react'
import CrudTableRow from './CrudTableRow';
import CrudContext from '../context/CrudContext';

const CrudTable = () => {

  const {db:data} = useContext(CrudContext);

  return (
    <div>
      <h3>Tabla de datos</h3>
      <table>
        <thead>
            <tr>
             <th>Nombre</th>
             <th>Constelación</th>
             <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            
            {/* data.map((knight) => (
              <tr key={knight.id}>
                <td>{knight.name}</td>
                <td>{knight.constellation}</td>
                <td><button>Editar</button><button>Elimiar</button></td>
              </tr>
            )) */} 
            {
                data.length > 0? (
                  data.map((knight) => 
                    <CrudTableRow 
                      key={knight.id} 
                      knight={knight}
                    />)
              ): (
                <tr>
                  <td colSpan={3}>Sin datos</td>
                </tr>
              )
            }
        </tbody>
      </table>
    </div>
  )
}

export default CrudTable;
