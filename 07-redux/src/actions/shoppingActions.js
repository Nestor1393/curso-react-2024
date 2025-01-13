import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART, SHOW_TOTAL_AMOUNT } from "../types";


export const calculateTotalAmount = () => ({type: SHOW_TOTAL_AMOUNT});

export const addToCart = (id) => ({type: ADD_TO_CART, payload: id});

export const delFromCart = (id) => ({type: REMOVE_ALL_FROM_CART, payload: id});

export const clearCart = () => ({type: CLEAR_CART});

export const delOneFromCart = (id) => ({type: REMOVE_ONE_FROM_CART, payload: id});
 
