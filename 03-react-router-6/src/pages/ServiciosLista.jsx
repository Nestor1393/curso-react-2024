import React from 'react'
import { Link } from 'react-router-dom'

const ServiciosLista = ({servicios}) => {
  return (
    <div>
      <h2>Lista de servicios</h2>
      <ul>
        {servicios.map((servicios) => (
        <li key={servicios.id}>
            <Link to={`/servicios/${servicios.id}`}>{servicios.nombre}</Link>
        </li>
        ))}
     </ul>
    </div>
  )
}

export default ServiciosLista
