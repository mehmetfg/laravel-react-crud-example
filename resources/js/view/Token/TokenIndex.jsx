import React, {useEffect} from "react";
import {initTokens} from "../../redux/actions/tokenAction";
import {useDispatch, useSelector} from "react-redux";


const TokenIndex = () => {
    const dispatch = useDispatch();
    const tokens =useSelector((state) => state.tokenReducer.tokens)
    useEffect(() => {
      dispatch(initTokens());
    }, []);

    return (
        <div>
        {tokens.length==0 && <h1>Yükleniyor...</h1>}

        <div> {
            tokens.map((item, index) => (

            <li key={index}>{item.name}   <a href={"/react/token/"+item.id}> Düzenle</a> </li>

        ))}</div>
        </div>
    )


}
export default TokenIndex
