import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
    },
    reducers: {
        createProduct: (state, action) => {
            state.data.push(action.payload);
        },
        readProducts: (state, action) => {
            state.data = action.payload;
        },
        updateProduct: (state, action) => {
            const {id, name} = action.payload;
            /*
            const product = state.data.find((prod)=> prod.id === id);
            if(product){
                product.name = name;
            }
            */
            state.data = state.data.map(prod => 
                prod.id === id ? {...prod, name} : prod
            );
        },
        deleteProduct: (state, action) => {
            state.data = state.data.filter((producto) => producto.id !== action.payload);
        },
    }
});

export const {createProduct, readProducts, updateProduct, deleteProduct} = productsSlice.actions;
export default productsSlice.reducer; 