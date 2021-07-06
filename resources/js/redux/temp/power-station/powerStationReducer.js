import {PowerStationActionTypes as T} from "../../constant/actionTypes";
const INITIAL_STATE = {
    powerStation:{},
    powerStations:[],
}

export  const powerStationReducer = (state= INITIAL_STATE, action) =>{
    switch (action.type){
        case T.INIT_POWERSTATIONS  :
            return {...state, powerStations:action.payload};
        case T.SELECT_POWERSTATION :
            return {...state, powerStation: action.payload};
        case T.INSERT_POWERSTATION :
            return {
                ...state,
                powerStations: [...state.powerStations, action.payload]
            };
        case T.UPDATE_POWERSTATION :
            return{
                ...state,
                powerStations:state.powerStations.map(item => item.id===action.payload.id ? action.payload : item)
            };
        case T.DELETE_POWERSTATION :
            return {
                ...state,
                powerStations:state.powerStations.filter(item => item.id != action.payload)
            };
        case T.REMOVE_SELECTED_POWERSTATION :
            return {...state, powerStation: {}};
        default:
            return
    }

}
