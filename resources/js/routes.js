import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Dashboard from './view/Dashboard';
import WalletCredit from "./view/Wallet/WalletCredit";
import Token from "./view/Token"
import WalletIndex from "./view/Wallet/WalletIndex"

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/react/token' component ={Token} />

                <Route path='/react/wallet-list' component ={WalletIndex} />
                <Route path='/react/wallet/:id' component ={WalletCredit} />
                <Route path='/react/wallet' component ={WalletCredit} />
            </Switch>
        )
    }
}

export default Routes;
