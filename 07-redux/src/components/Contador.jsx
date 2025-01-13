import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset, restar, restar_5, sumar, sumar_5 } from '../actions/contadorActions';

const Contador = () => {
  const  state = useSelector(state => state.contador);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Contador Redux</h2>
      <nav>
        <button onClick={() => dispatch(sumar_5())}>+5</button>
        <button onClick={() => dispatch(sumar())}>+1</button>
        <button onClick={() => dispatch(reset())}>0</button>
        <button onClick={() => dispatch(restar())}>-1</button>
        <button onClick={() => dispatch(restar_5())}>-5</button>
      </nav>
      <h3>{state}</h3>
    </div>
  )
}

export default Contador
