import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Redirect,Switch,NavLink,withRouter} from "react-router-dom"
import Headers from "./views/header"
import Classify from "./views/classify/classify"
import Home from "./views/home/home"
import Mine from "./views/mine/mine"
import ShoppingCart from "./views//shoppingCart/shoppingCart"
import Special from "./views/special/special"
class App extends Component {
  render() {
    return (
      <div>
       <Router>
                <Headers></Headers>
                <Route path="/header/home" component={Home}></Route>
                <Route path="/header/special" component={Special}></Route>
                <Route path="/header/classify" component={Classify}></Route>
                <Route path="/header/shoppingCart" component={ShoppingCart}></Route>
                <Route path="/header/mine" component={Mine}></Route> 
       </Router>
        
      </div>
    )
  }
}

export default App
