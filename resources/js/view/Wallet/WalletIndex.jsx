import React, {useEffect} from "react";
import {deleteWallet, initWallets} from "../../redux/actions/walletAction";
import {useDispatch, useSelector} from "react-redux";


const WalletIndex = () => {
    const dispatch = useDispatch();
    const wallets =useSelector((state) => state.walletReducer.wallets)
    useEffect(() => {
      dispatch(initWallets());
    }, []);

    const walletDelete = (id) => {
        console.log("delete")
        dispatch(deleteWallet(id))
    }
    return (
        <div>
        {wallets.length==0 && <h1>Yükleniyor...</h1>}

        <div> {
            wallets.map((item, index) => (

            <li key={index}>{item.name}   <a href={"/react/wallet/"+item.id}> Düzenle </a>
            <a onClick={() => walletDelete(item.id)} >sil</a> </li>

        ))}</div>
        </div>
    )


}
export default WalletIndex
