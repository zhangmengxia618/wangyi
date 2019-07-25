import React, { Component} from 'react'
import { BrowserRouter as Router, Route,Redirect,Switch,NavLink,withRouter} from "react-router-dom"
import style from "./footer.module.scss"
export class Footer extends Component {
    render() {
        return (
            <ol className={style.footer}>
                <li><NavLink to="/layer/home">首页</NavLink></li>
                <li><NavLink to="/layer/special">专题</NavLink></li>
                <li><NavLink to="/layer/classify">分类</NavLink></li>
                <li><NavLink to="/layer/shoppingCart">购物车</NavLink></li>
                <li><NavLink to="/layer/mine">我的</NavLink></li>
            </ol>
        )
    }
}

export default Footer
