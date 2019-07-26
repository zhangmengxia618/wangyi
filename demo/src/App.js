import React, { Component ,Fragment} from 'react'
// import { BrowserRouter as Router, Route,Redirect,Switch,NavLink,withRouter} from "react-router-dom"
import Routers from "./router"
import routers from "./router/routerPath"

class App extends Component {
  render() {
      return (
          <Fragment>
              <Routers routers={routers}></Routers>
          </Fragment>
      )
  }
}

export default App
