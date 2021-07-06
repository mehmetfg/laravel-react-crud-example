import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import Routes from './routes'
import {Provider} from "react-redux";
import  store from "./redux/store"
const  Index = () => {
    return (
        <Provider store={store}>
        <Router>
            <Link to={'/react/'} >Dashboard</Link>
            <Link to={'/react//token'} >Dashboard</Link>
            <Link to={'/react/wallet'} >Wallet</Link>
            <Link to={'/react/wallet-list'} >Cüzdan Listesi</Link>
            <Routes/>

        </Router>
</Provider>
    )

}
export default Index
