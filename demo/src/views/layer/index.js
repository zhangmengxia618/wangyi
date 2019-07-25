import React, { Component } from 'react'
import Footer from "../component/footer"
import RouterView from "../../router/routerView";
import style from "./index.module.scss"
export class index extends Component {
    render() {
        return (
            <div>
                <div className={style.center}>
                   <RouterView router={this.props.child}></RouterView>
                </div>
               
                <Footer></Footer>
            </div>
        )
    }
}

export default index
