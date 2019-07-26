import React, { Component } from 'react'
import Footer from "../component/footer"
import RouterView from "../../router/routerView";
import style from './index.module.scss'

export class index extends Component {
    render() {
        return (
            <div className={style.wrap}>
                <RouterView router={this.props.child}></RouterView>
                <Footer></Footer>
            </div>
        )
    }
}

export default index
