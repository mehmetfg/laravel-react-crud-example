import {fetcher} from "../../lib/fetcher";
import {TokenActionTypes as T} from "../constant/actionTypes";
export const initTokens = () => async (dispatch) => {
        const res= await  fetcher.get('/tokens')
        dispatch({type:T.INIT_TOKENS,payload:res.data})
}
export const selectToken = (id) => async (dispatch) => {
        const response = await fetcher.get('/tokens/'+id)
        dispatch({type:T.SELECT_TOKEN, payload:response.data})
}

export const insertToken = (data) => async (dispatch) => {
    const response = await  fetcher.post('/tokens', data)
    alert("kayıt başarılı ")
    dispatch({type:T.INSERT_TOKEN, payload:data})

}
export const updateToken = (data) => async (dispatch) => {
    const response = await  fetcher.put('/tokens/'+data.id, data)
    dispatch({type:T.INSERT_TOKEN, payload:data})
}
export const deleteToken = (data) => async (dispatch) => {
    const response = await  fetcher.delete('/tokens/'+data.id, data)
    dispatch({type:T.INSERT_TOKEN, payload:data})
}
export const removeSelectedToken = () => async (dispatch) => {
    dispatch({type:T.REMOVE_SELECTED_TOKEN})
}
