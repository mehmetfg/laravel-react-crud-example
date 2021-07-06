import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Dashboard from './view/Dashboard';
import WalletCredit from "./view/Wallet/WalletCredit";
import Token from "./view/Token/TokenIndex"
import WalletIndex from "./view/Wallet/WalletIndex"
import TokenCredit from "./Token/TokenCredit";
import TokenIndex from "./Token/TokenIndex";

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/react/token/:id' component ={TokenCredit} />
                <Route path='/react/token' component ={TokenCredit} />
                <Route path='/react/token-list' component ={TokenIndex} />
                <Route path='/react/wallet-list' component ={WalletIndex} />
                <Route path='/react/wallet/:id' component ={WalletCredit} />
                <Route path='/react/wallet' component ={WalletCredit} />
            </Switch>
        )
    }
}

export default Routes;
