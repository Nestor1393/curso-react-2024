import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const CrudTableRow = ({knight, deleteData, setDataToEdit}) => {

  const {id} = knight;
  let history = useHistory();

  const handleEdit = () =>{
    setDataToEdit(knight);
    history.push(`/editar/${id}`);

  }

  return (

      <tr>
        <td>{knight.name}</td>
        <td>{knight.constellation}</td>
        <td>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={() => deleteData(knight.id)}>Eliminar</button>
        </td>
      </tr>
  )
}

export default CrudTableRow;
