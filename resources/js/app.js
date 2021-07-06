require('./bootstrap');
import React, {createContext} from "react";
import ReactDom from 'react-dom'
import Index from "./Index";
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDom.render(
    <Index/>, document.getElementById('root')
)
