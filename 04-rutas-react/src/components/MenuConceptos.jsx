import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
            <span>Menú con enlaces html (no recomendado):</span>
            <a href='/'>Home</a>
            <a href='/acerca'>Acerca</a>
            <a href='/contacto'>Contacto</a>
        </li>
        <li>
            <span>Componente Link:</span>
            <Link to="/">Home</Link>
            <Link to="/acerca">Acerca</Link>
            <Link to="/contacto">Contacto</Link>
        </li>
        <li>
            <span>Componente NavLink:</span>
            <NavLink exact to="/" activeClassName="active">Home</NavLink> 
            <NavLink exact to="/acerca" activeClassName="active">Acerca</NavLink> 
            <NavLink exact to="/contacto" activeClassName="active">Contacto</NavLink> 
            <NavLink exact to="/no-existe" activeClassName="active">Error404</NavLink> 
        </li>
        <li>
          <span>Paso de parametros con useParams: </span>
          <Link to="/usuario/nestormj">Nestor</Link>
        </li>
        <li>
          <span>Parámetros de consulta: </span>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <span>Redirecciones: </span>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <span>Rutas anidadas: </span>
          <Link to="/react">React</Link>
        </li>
        <li>
          <span>Rutas privadas: </span>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ol>
    </nav>
  )
}

export default MenuConceptos
