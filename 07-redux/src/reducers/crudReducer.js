import { TYPES } from "../actions/crudActions";
import { CREATE_DATA, DELETE_DATA, NO_DATA, READ_ALL_DATA, UPDATE_DATA } from "../types";

export const crudInitialState = {
    db: null,
}

export function curdReducer (state = crudInitialState, action) {
    switch (action.type) {
        case READ_ALL_DATA:{
            return {
                ...state,
                db: action.payload
            }
        }
        case CREATE_DATA: {

            return {
                ...state, db: [...state.db, action.payload],
            }

        }

        case UPDATE_DATA: {

            let newData = state.db.map((knight) => knight.id === action.payload.id? action.payload : knight);
            
            return {
                ...state, db: newData,
            }
        }
        case DELETE_DATA: {
            let newData = state.db.filter(knight => knight.id !== action.payload);

            /*
            let nuevoArreglo = [];
            state.db.map(knight =>  {
                    if(knight.id !== action.payload){
                        console.log("agregado: "+knight.name);
                    }else{
                        console.log("eliminado: "+knight.name);
                    }    
            });

            */

            return {
                ...state, db: newData
            }

        }
        case NO_DATA: return crudInitialState;
        default:
            return {...state};
    }
}