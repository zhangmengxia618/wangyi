import React, { Component } from 'react'
import Footer from "../component/footer"
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import RouterView from "../../router/routerView";
import style from './index.module.scss'
import { Switch, withRouter, Route } from 'react-router-dom'
console.log(style)
export class index extends Component {
    render() {
        let location = this.props.location;
        console.log(location)
        return (
            <div className={style.wrap}>
               
                <CSSTransition
                key={location.pathname}
                classNames={style.fade}
                timeout={5800}
                apper={true}
                >
                    <Switch location={location}>
                         <RouterView router={this.props.child} ></RouterView>
                    </Switch>
                    
                
            </CSSTransition>
               <Footer></Footer>
            </div>
        )
    }
}

export default index
