import {WalletActionTypes as T} from "../constant/actionTypes";

const INITIAL_STATE = {
    wallet:{},
    wallets:[],
}

export  const walletReducer = (state= INITIAL_STATE, action) =>{
    switch (action.type){
        case T.INIT_WALLETS  :
            return {...state, wallets:action.payload};
        case T.SELECT_WALLET :

            console.log(action.payload)
            return {...state, wallet:action.payload};
        case T.INSERT_WALLET :
            return {
                ...state,
                wallets: [...state.wallets, action.payload]
            };
        case T.UPDATE_WALLET :
            return{
                ...state,
                wallets:state.wallets.map(item => item.id===action.payload.id ? action.payload : item)
            };
        case T.DELETE_WALLET :
            return {
                ...state,
                wallets:state.wallets.filter(item => item.id != action.payload)
            };
        case T.REMOVE_SELECTED_WALLET :

            return {...state, wallet: {}};
        default:
            return state
    }

}
