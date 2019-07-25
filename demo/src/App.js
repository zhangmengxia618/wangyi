import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink, withRouter } from "react-router-dom"
import Footer from "./views/footer"
import Classify from "./views/layer/classify/classify"
import Home from "./views/layer/home/home"
import Mine from "./views/layer/mine/mine"
import ShoppingCart from "./views/layer/shoppingCart/shoppingCart"
import Special from "./views/layer/special/special"
import Login from "./views/login/login"
class App extends Component {
  render() {
    return (
      <div>
        <Router>

          <Route path="/header/login" component={Login}></Route>
          <Route path="/header/home" component={Home}></Route>
          <Route path="/header/special" component={Special}></Route>
          <Route path="/header/classify" component={Classify}></Route>
          <Route path="/header/shoppingCart" component={ShoppingCart}></Route>
          <Route path="/header/mine" component={Mine}></Route>
          <Footer></Footer>
        </Router>

      </div>
    )
  }
}

export default App
