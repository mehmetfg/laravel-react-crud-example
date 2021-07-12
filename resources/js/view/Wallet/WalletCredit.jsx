import React, {Component, useEffect,useState} from "react";
import ReactDom from 'react-dom'
import {Link, useParams} from "react-router-dom";
import {
    insertWallet,
    updateWallet,
    selectWallet,
    removeSelectedWallet
} from "../../redux/actions/walletAction";
import {useDispatch, useSelector} from "react-redux";


const  WalletCredit = () => {
    const dispatch = useDispatch();
    const [wallet, setWallet] = useState({})
    const wallets = useSelector((state) => state.walletReducer.wallet)

    const {id}= useParams();

    useEffect( () => {
        if(id && id !== "") dispatch(selectWallet(id))
       return () =>{
          dispatch(removeSelectedWallet())
       }

    }, [id]);

    useEffect(() => {
        if(id && id !== "") setWallet(wallets)
    }, [wallets]);



    const addOrEdit = (e) => {
        e.preventDefault();
        if(id && id !== ""){
            dispatch(updateWallet(wallet))
        }else {
            dispatch(insertWallet(wallet))
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setWallet({ ...wallet, [name]: value });
    }
    return(
        <div>
            <div className="card-body">
                <div className="row g-2">
                    <div className="col-md-12">
                        <form onSubmit={addOrEdit}>
                            <div className="row">
                                <div className="mb-3 m-form__group col-md-6">
                                    <label htmlFor="name" className="form-label">Adı:</label>
                                    <input className="form-control" name="name" type="text" value={wallet.name}
                                           id={"name"} onChange={handleChange}/>
                                </div>



                                <div className="mb-3 m-form__group col-md-6">
                                    <label htmlFor="public_key" className="form-label">Public Key: {wallet.public_key}</label>
                                    <input className="form-control" name="public_key" type="text" value={wallet.public_key}
                                           id="public_key" onChange={handleChange}/>
                                </div>



                                <div className="mb-3 m-form__group col-md-6">
                                    <label htmlFor="private_key" className="form-label">Private Key:</label>
                                    <input className="form-control" name="private_key" type="text"
                                           value={wallet.private_key} id="private_key" onChange={handleChange}/>
                                </div>



                                <div className="mb-3 m-form__group col-md-6">
                                    <label htmlFor="id_card_number" className="form-label">Kimlik
                                        Numarası:</label>
                                    <input className="form-control" name="id_card_number" type="text" value={wallet.id_card_number}
                                           id="id_card_number" onChange={handleChange}/>
                                </div>



                                <div className="mb-3 m-form__group col-md-6">
                                    <label htmlFor="balance" className="form-label">Bakiye:</label>
                                    <input className="form-control" name="balance" type="text" value={wallet.balance}
                                           id="balance" onChange={handleChange}/>
                                </div>



                                <div className="mb-3 m-form__group col-md-6">
                                    <label htmlFor="progress_payment" className="form-label">&Ouml;deme
                                        Durumu:</label>
                                    <input className="form-control" name="progress_payment" type="text"
                                           value={wallet.progress_payment} id="progress_payment" onChange={handleChange}/>
                                </div>


                                <div className="card-footer">
                                    <input id="btnValletSave" className="btn btn-primary" type="submit"
                                           value="Kaydet"/>
                                    <a href="https://sale.cycecoin.com/vallets"
                                       className="btn btn-light">Vazgeç</a>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )


}

export default WalletCredit
