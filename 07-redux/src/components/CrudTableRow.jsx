import React from 'react'

const CrudTableRow = ({knight, deleteData, setDataToEdit}) => {
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
