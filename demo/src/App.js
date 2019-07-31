import React, { Component ,Fragment} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
// import { BrowserRouter as Router, Route,Redirect,Switch,NavLink,withRouter} from "react-router-dom"
import Routers from "./router"
import routers from "./router/routerPath"
import style from  "./App.css"
import 'antd/dist/antd.css';
class App extends Component {
  render() {
    let location = this.props.location
    console.log(this.props)
      return (
        <Fragment>
            <Routers routers={routers}></Routers>
        </Fragment>
      )
  }
}

export default App
