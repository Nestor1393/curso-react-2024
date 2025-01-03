import React from 'react'

const CartItem = ({data, delFromCart, delOneFromCart}) => {
   let {id, name, price, quantity} = data;
  return (
    <div style={{borderBottom: "thin solid gray"}}>
      <h4>{name} </h4>
      <h5>${price}.00 (x{quantity}) = {price * quantity}</h5>
      <button onClick={() => delOneFromCart(id)}>Eliminar uno</button>
      <button onClick={() => delFromCart(id)}>Eliminar todos</button>
    </div>
  )
}

export default CartItem
