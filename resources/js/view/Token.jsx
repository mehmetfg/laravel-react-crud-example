import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {initTokens} from "../redux/actions/tokenAction";
import {useDispatch, useSelector} from "react-redux";
const Token = () => {
    const tokens =useSelector((state) => state.tokenReducer.tokens)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initTokens())
    }, []);
    return(
        <div>
            <h1>Token Server c fasf  faase fadsf adfasf adfasf</h1>
            <h1>Token Server c fasf  faase fadsf adfasf adfasf</h1>
            <Link to={'/'}>DashBoard</Link>
            {tokens.length==0 && <p>Loading</p>}
            {
                tokens.map((item, index) => (
                    <h1>{item.name}</h1>
                ))}
        </div>
    )
}
export  default Token
