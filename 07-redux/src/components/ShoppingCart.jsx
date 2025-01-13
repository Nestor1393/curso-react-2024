import React, { useEffect, useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducer'
import ProductItem from './ProductItem';
import CartItem from './CartItem';
import { calculateTotalAmount, clearCart, TYPES } from '../actions/shoppingActions';
import { useDispatch, useSelector } from 'react-redux';

const ShoppingCart = () => {

  const  state = useSelector(state => state.shopping);

  //const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const {products, cart, totalAmount} = state;

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Carrito de compras</h2>
      <h3>Productos</h3>
      <article className='box grid-responsive'>
        {products.map((product) => 
          (<ProductItem key={product.id} data={product}/>)
        )}
      </article>
      <h3>Carrito</h3>
      <article className='box'>
      <button onClick={()=> dispatch(clearCart())}>Limpiar carrito</button> Total a pagar:{totalAmount}
        {
          cart.map((item, index) => <CartItem key={index} data={item}/>)
        }
      </article>
    </div>
  )
}

export default ShoppingCart
