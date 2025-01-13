import { TYPES } from "../actions/shoppingActions"
import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART, SHOW_TOTAL_AMOUNT } from "../types";

export const shoppingInitialState = {

    products: [
        {id: 1, name: "Producto 1", price: 100},
        {id: 2, name: "Producto 2", price: 200},
        {id: 3, name: "Producto 3", price: 300},
        {id: 4, name: "Producto 4", price: 400},
        {id: 5, name: "Producto 5", price: 500},
        {id: 6, name: "Producto 6", price: 600},
    ],
    cart: [],
    totalAmount: 0,
}

export function shoppingReducer(state = shoppingInitialState, action){

    switch(action.type) {
        case ADD_TO_CART: {

            let newItem = state.products.find(
                (product) => product.id === action.payload
            );

            let exist_in_cart = state.cart.find(
              (product) => product.id === action.payload
            );

            if(exist_in_cart) {

                state.cart = state.cart.map((product) => 
                    product.id === action.payload ?
                    {...product, quantity: product.quantity + 1} :product);

                return { ...state}

            }else {

                newItem.quantity = 1;
                return {...state, cart: [...state.cart, newItem]}
                
            } 

        }
        case REMOVE_ONE_FROM_CART: {

            state.cart = state.cart.map((product) => product.id === action.payload?
            {...product, quantity: product.quantity -1} : product)

            state.cart = state.cart.filter(product => product.quantity !== 0);

            return {...state}
        }
        case REMOVE_ALL_FROM_CART: {

            state.cart = state.cart.filter(product => product.id !== action.payload);
            return {...state}
        }
        case CLEAR_CART: return shoppingInitialState

        case SHOW_TOTAL_AMOUNT: {
             state.totalAmount = 0;
             state.cart.map((product) => {
               state.totalAmount += (product.price * product.quantity)
             })

             return {...state}
        }
        default: return {...state}
    }
}