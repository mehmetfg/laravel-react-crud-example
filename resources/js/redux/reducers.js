import {combineReducers} from "redux";
import {tokenReducer} from "./reducers/tokenReducer";
import {walletReducer} from "./reducers/wallletReducer";

const reducers = combineReducers({
    walletReducer,
    tokenReducer
})

export default reducers;
