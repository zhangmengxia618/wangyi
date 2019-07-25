import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from "./views/login/login"
//引入mobx
import {Provider} from "mobx-react"
import store from "./store"
ReactDOM.render(
    <Provider {...store}>   
    <div>
        <App />
        {/* <Login /> */}
    </div>
    
</Provider>, document.getElementById('root'));
