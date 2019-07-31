import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import style from './collect.module.scss'
import {NavLink} from 'react-router-dom'


@inject('collect')
@observer

class Collect extends Component {
  componentDidMount() {
    this.props.collect.getCollectData({ typeId: 0 })
  }
  render() {
    return (
      <div className={style.con}>
        <header className={style.header}>
          <p className={style.left}><NavLink to='/layer/mine'>&lt;</NavLink></p>
          <p className={style.tit}>我的收藏哦~</p>
          <p className={style.right}></p>
        </header>
        <section className={style.section}>
          <ul className={style.ul}>
            {
              this.props.collect.collectList && this.props.collect.collectList.map((item, i) => {
                return <li className={style.li} key={item.value_id}>
                  <div className={style.imgbox}><img src={item.list_pic_url} alt="" /></div>
                  <div className={style.info}>
                    <p>{item.name}</p>
                    <p className={style.brief}>{item.goods_brief}</p>
                    <p className={style.price}>￥{item.retail_price}</p>
                  </div>
                </li>
              })
            }


          </ul>
        </section>
      </div>
    )
  }
}


export default Collect