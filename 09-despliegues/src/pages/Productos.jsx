import React from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const Productos = () => {
    const {search} = useLocation();
    const query  = new URLSearchParams(search);
    //console.log(query);
    const LIMIT = 20;
    let start = parseInt(query.get("inicio")) || 1;
    let end = parseInt(query.get("fin")) || LIMIT;
    

    let history = useHistory();
    //console.log(history);

    const handlePrev = (e) => {
        history.push({search:`?inicio=${start - LIMIT}&fin=${end - LIMIT}`});
    }

    const handleNext = (e) => {
        history.push({search:`?inicio=${start + LIMIT}&fin=${end + LIMIT}`});
    }



  return (
    <div>
      <h3>Productos</h3>
      <p>Mostrando productos de <b>{start}</b> al  <b>{end}</b></p>
      {start > LIMIT && <button onClick={handlePrev}>atras</button>}
      <button onClick={handleNext}>adelante</button>
    </div>
  )
}

export default Productos
