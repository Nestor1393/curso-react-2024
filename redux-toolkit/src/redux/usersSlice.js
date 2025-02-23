import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        
        fetchUsers: (state, action) => {
            //return action.payload;
            state.length = 0; // Vaciar el array antes de actualizarlo
            state.push(...action.payload); // Añadir los nuevos usuarios   
        },
    },
});

export const {fetchUsers} = usersSlice.actions;
export default usersSlice.reducer;