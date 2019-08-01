import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './mine.module.scss'
import {removeCookie } from "../../../utils/index";

export class Mine extends Component {
    render() {
        return (
            <div className={style.con}>
                <header className={style.head}>
                    <div className={style.avator}><img src="http://a2.qpic.cn/psb?/V12T2KCG3NWse3/IEhLXLg5sggGRx2G0B5bmyjgCInO3ZATmtevVPS27x8!/c/dCEBAAAAAAAA&ek=1&kp=1&pt=0&bo=OASgBTgEoAURECc!&t=5&tl=3&vuin=1429547950&tm=1564578000&sce=60-2-2&rf=0-0" alt=""/></div>
                    <div className={style.info}>
                        <p>1532432423</p>
                        <p>VIP用户</p>
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
                <div className={style.exit} onClick={()=>{this.deteleLogin()}}>退出登录</div>
            </div>
        )
    }

    deteleLogin(){
        removeCookie()
        this.props.history.push('/login')
    }
}

export default Mine
