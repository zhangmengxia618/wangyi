import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { NavLink } from 'react-router-dom'
import style from './mine.module.scss'


export class Mine extends Component {
    render() {
        return (
            <div className={style.con}>
                <header className={style.head}>
                    <div className={style.avator}><img src="" alt=""/></div>
                    <div className={style.info}>
                        <p>1532432423</p>
                        <p>普通用户</p>
                    </div>
                </header>
                <ul className={style.ul}>
                    <li>
                        <NavLink to='/collect'>
                            我的收藏
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/address'>
                            地址管理
                        </NavLink>
                    </li>
                    <li>我的订单</li>
                    <li>周末拼单</li>
                    <li>优惠券</li>
                    <li>优选购</li>
                    <li>我的红包</li>
                    <li>会员plus</li>
                    <li>邀请返利</li>
                    <li>意见反馈</li>
                    <li>客服咨询</li>
                    <li>账户安全</li>
                </ul>
                <div className={style.exit}>退出登录</div>
            </div>
        )
    }
}

export default Mine
