import { TYPES } from "../actions/crudActions";

export const crudInitialState = {
    db: null
}

export function curdReducer (state, action) {
    switch (action.type) {
        case TYPES.READ_ALL_DATA:{
            return {
                ...state,
                db: action.payload
            }
        }
        case TYPES.CREATE_DATA: {

            return {
                ...state, db: [...state.db, action.payload],
            }

        }

        case TYPES.UPDATE_DATA: {

            let newData = state.db.map((knight) => knight.id === action.payload.id? action.payload : knight);
            
            return {
                ...state, db: newData,
            }
        }
        case TYPES.DELETE_DATA: {

            let newData = state.db.filter(knight => knight.id !== action.payload.id);

            return {
                ...state, 
                db: newData,
            }

        }
        case TYPES.NO_DATA: return crudInitialState;
        default:
            return {...state};
    }
}