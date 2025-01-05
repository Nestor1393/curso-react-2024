import React, { useEffect, useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducer'
import ProductItem from './ProductItem';
import CartItem from './CartItem';
import { TYPES } from '../actions/shoppingActions';

const ShoppingCart = () => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const {products, cart, totalAmount} = state;

  const calculateTotalAmount = () => {
    dispatch({type: TYPES.SHOW_TOTAL_AMOUNT});
 }

  const addToCart = (id) => {
    dispatch({type: TYPES.ADD_TO_CART, payload: id});
    calculateTotalAmount();
  }

  const delFromCart = (id) => {
    dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id});
    calculateTotalAmount();
  }

  const clearCart = () => {
    dispatch({type: TYPES.CLEAR_CART})
    calculateTotalAmount();
  }

  const delOneFromCart = (id) => {
    dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload: id});
    calculateTotalAmount();
    
  }

  
  

  return (
    <div>
      <h2>Carrito de compras</h2>
      <h3>Productos</h3>
      <article className='box grid-responsive'>
        {products.map((product) => 
          (<ProductItem key={product.id} data={product} addToCart={addToCart}/>)
        )}
      </article>
      <h3>Carrito</h3>
      <article className='box'>
      <button onClick={clearCart}>Limpiar carrito</button> Total a pagar:{totalAmount}
        {
          cart.map((item, index) => <CartItem key={index} data={item} delFromCart={delFromCart} delOneFromCart= {delOneFromCart}/>)
        }
      </article>
    </div>
  )
}

export default ShoppingCart
