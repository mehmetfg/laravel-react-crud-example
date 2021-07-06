import {fetcher} from "../../lib/fetcher";
import {WalletActionTypes as T} from "../constant/actionTypes";
export const initWallets = () => async (dispatch) => {
        const res= await  fetcher.get('/wallets')
        dispatch({type:T.INIT_WALLETS,payload:res.data})
}
export const selectWallet = (id) => async (dispatch) => {
        const response = await fetcher.get('/wallets/'+id)

        dispatch({type:T.SELECT_WALLET, payload:response.data})
}

export const insertWallet = (data) => async (dispatch) => {
    const response = await  fetcher.post('/wallets', data)
    alert("kayıt başarılı ")
    dispatch({type:T.INSERT_WALLET, payload:data})

}
export const updateWallet = (data) => async (dispatch) => {
    const response = await  fetcher.put('/wallets/'+data.id, data)
    dispatch({type:T.INSERT_WALLET, payload:data})
}
export const deleteWallet = (data) => async (dispatch) => {
    const response = await  fetcher.delete('/wallets/'+data.id, data)
    dispatch({type:T.INSERT_WALLET, payload:data})
}
export const removeSelectedWallet = () => async (dispatch) => {
    dispatch({type:T.REMOVE_SELECTED_WALLET})
}
