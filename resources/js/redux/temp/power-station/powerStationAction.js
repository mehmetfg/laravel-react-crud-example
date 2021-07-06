import {fetcher} from "../../../lib/fetcher";
import {PowerStationActionTypes as T} from "../../constant/actionTypes";
export const initPowerStations = () => async (dispatch) => {
        const res= await  fetcher.get('/powerStations')
        dispatch({type:T.INIT_POWERSTATIONS,payload:res.data})
}
export const selectPowerStation = (id) => async (dispatch) => {
        const response = await fetcher.get('powerStations/'+id)
        dispatch({type:T.SELECT_POWERSTATION, payload:response.data})
}

export const insertPowerStation = (data) => async (dispatch) => {
    const response = await  fetcher.post('powerStations', data)
    dispatch({type:T.INSERT_POWERSTATION, payload:data})
}
