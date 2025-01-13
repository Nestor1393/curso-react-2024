import React from 'react'
import { useDispatch } from 'react-redux';
import { calculateTotalAmount, delFromCart, delOneFromCart } from '../actions/shoppingActions';

const CartItem = ({data}) => {
   let {id, name, price, quantity} = data;
   const dispatch = useDispatch();

   const combinarAccionesEliminarUno = () => {
   
         dispatch(delOneFromCart(id));
         dispatch(calculateTotalAmount());
       }

    const combinarAccionesEliminar = () => {
   
        dispatch(delFromCart(id));
        dispatch(calculateTotalAmount());
      }

  return (
    <div style={{borderBottom: "thin solid gray"}}>
      <h4>{name} </h4>
      <h5>${price}.00 (x{quantity}) = {price * quantity}</h5>
      <button onClick={combinarAccionesEliminarUno}>Eliminar uno</button>
      <button onClick={combinarAccionesEliminar}>Eliminar todos</button>
    </div>
  )
}

export default CartItem
