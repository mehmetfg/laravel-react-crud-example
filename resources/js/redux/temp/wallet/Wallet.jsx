import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {initWallets} from "../redux/actions/walletAction";
import {useDispatch, useSelector} from "react-redux";
const Wallet = () => {
    const wallets =useSelector((state) => state.walletReducer.wallets)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initWallets())
    }, []);
    return(
        <div>
            <h1>Wallet Server c fasf  faase fadsf adfasf adfasf</h1>
            <h1>Wallet Server c fasf  faase fadsf adfasf adfasf</h1>
            <Link to={'/'}>DashBoard</Link>
            {wallets.length==0 && <p>Loading</p>}
            {
                wallets.map((item, index) => (
                    <h1>{item.name}</h1>
                ))}
        </div>
    )
}
export  default Wallet
