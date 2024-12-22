import React, { useContext } from 'react'
import CrudContext from '../context/CrudContext';

const CrudTableRow = ({knight}) => {
  const {deleteData, setDataToEdit} = useContext(CrudContext);
  
  return (

      <tr>
        <td>{knight.name}</td>
        <td>{knight.constellation}</td>
        <td>
          <button onClick={()=> setDataToEdit(knight)}>Editar</button>
          <button onClick={() => deleteData(knight.id)}>Eliminar</button>
        </td>
      </tr>
  )
}

export default CrudTableRow;
