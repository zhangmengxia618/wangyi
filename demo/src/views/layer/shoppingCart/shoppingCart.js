import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import style from './shopping.module.scss'

// @inject('')
// @observer

class ShoppingCart extends Component {
    render() {
        return (
            <div className={style.con}>
                <header className={style.header}>
                    <p><span className={style.star}>★</span> 30天无忧退货</p>
                    <p><span className={style.star}>★</span> 48小时快速退货</p>
                    <p><span className={style.star}>★</span> 满88元免邮费</p>
                </header>
                <section className={style.section}>
                    <ul className={style.ul}>
                        <li className={style.li}>
                            <div className={style.checkbox}><input type="checkbox" /></div>
                            <div className={style.imgbox}>< img src="http://yanxuan.nosdn.127.net/6ad1813d123f7a80f84c2cfa5f8c7caf.png" alt="" /></div>
                            <div className={style.goodsinfo}>
                                <p>AB面独立弹簧床垫</p>
                                <p>1.8米床垫</p>
                                <p className={style.price}>￥123</p>
                            </div>
                            <div className={style.goodsnum}>X3</div>
                        </li>
                    </ul>
                </section>
                <footer className={style.footer}>
                    <div className={style.allchoose}><input type="checkbox" /></div>
                    <div className={style.info}><span>已选(5)</span> <span> ￥1023</span></div>
                    <div className={style.edit}>编辑</div>
                    <div className={style.order}>下单</div>
                </footer>
            </div>
        )
    }
}

export default ShoppingCart
