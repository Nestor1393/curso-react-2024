import {BrowserRouter, HashRouter, Routes, Route, Navigate} from 'react-router-dom';

import './App.css'
import { Home } from './pages/home';
import { Acerca } from './pages/Acerca';
import { Contacto } from './pages/Contacto';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Error404 } from './pages/Error404';
import { Productos } from './pages/Productos';
import { ProductoDetalle } from './pages/ProductoDetalle';
import { useState } from 'react';
import { Servicios } from './pages/Servicios';
import { Garantia } from './pages/Garantia';
import ServiciosLista from './pages/ServiciosLista';
import { ServicioDetalle } from './pages/ServicioDetalle';

function App() {

  const [productos, setProductos] = useState([
    {id: 1, nombre: "Producto 1", precio : 100},
    {id: 2, nombre: "Producto 2", precio : 200},
    {id: 3, nombre: "Producto 3", precio : 300},
    {id: 4, nombre: "Producto 4", precio : 400},
    {id: 5, nombre: "Producto 5", precio : 500}
]);

const [servicios, setServicios] = useState([
  {id: 1, nombre: "servicio 1", precio : 100},
  {id: 2, nombre: "servicio 2", precio : 200},
  {id: 3, nombre: "servicio 3", precio : 300},
  {id: 4, nombre: "servicio 4", precio : 400},
  {id: 5, nombre: "servicio 5", precio : 500}
]);

  return (
    <>
      <Header/>
      <BrowserRouter>
      {/* <HashRouter> */}
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/acerca' element={<Acerca/>}/>
          <Route path='/about' element={<Navigate to={'/acerca'}/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/productos' element={<Productos productos={productos}/>}/>
          <Route path='/servicios' element={<Servicios/>}>
            <Route index element={<h2>Este es el home de servicios 1</h2>}/>
            {/* <Route path='/servicios/garantia' element={<h2>Garantía de nuestros servicios</h2>}/> */}
            <Route path='/servicios/garantia' element={<Garantia/>}/>
            <Route path='lista' element={<ServiciosLista servicios={servicios}/>}/>
            <Route path='politicas' element={<h2>Políticas</h2>}/>
            <Route path=':id' element={
              <>
                <ServiciosLista servicios={servicios}/>
                <ServicioDetalle servicios={servicios}/>
              </>
              }/>
          </Route>
          <Route path='/productos/:id' element={<ProductoDetalle productos={productos} />}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
        {/* </HashRouter> */}
      </BrowserRouter>
      
    </>
  )
}

export default App
