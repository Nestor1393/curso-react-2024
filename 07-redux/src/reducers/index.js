import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";
import { shoppingReducer } from "./shoppingReducer";
import { curdReducer } from "./crudReducer";

const reducer = combineReducers({
    contador: contadorReducer,
    shopping: shoppingReducer,
    crud: curdReducer,
});

export default reducer;