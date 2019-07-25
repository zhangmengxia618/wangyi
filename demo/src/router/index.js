import { BrowserRouter as Router, Route,Redirect,Switch} from "react-router-dom";
import React from 'react';

import router from "./routerPath"
import RouterView from "./routerView"

function Routers(){
    return <Router>
        <RouterView router={router}></RouterView>
    </Router>
}

export default Routers;
