import React, { Component} from 'react'
import { BrowserRouter as Router, Route,Redirect,Switch,NavLink,withRouter} from "react-router-dom"
import './footer.css';
export class Header extends Component {
    render() {
        return (
            <ol className="footer">
                <li><NavLink to="/header/home">首页</NavLink></li>
                <li><NavLink to="/header/special">专题</NavLink></li>
                <li><NavLink to="/header/classify">分类</NavLink></li>
                <li><NavLink to="/header/shoppingCart">购物车</NavLink></li>
                <li><NavLink to="/header/mine">我的</NavLink></li>
            </ol>
        )
    }
}

export default Header
