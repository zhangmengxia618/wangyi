import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { NavLink } from 'react-router-dom';
import style from './zhizao.module.scss'

@inject('home')
@observer


//制造商页面
class Zhizaoshang extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.home.getZhizaoshangData(id);
    this.props.home.getbrandData({ brandId: id, page: 1, size: 10000 })
  }
  render() {

    return (
      <div className={style.con}>
        <header className={style.header}>
          <p className={style.titleft}><NavLink to='/'>&lt;</NavLink></p>
          <p className={style.tit}>{this.props.home.zhizaodata.brand && this.props.home.zhizaodata.brand.name}</p>
          <p className={style.titright}></p>
        </header>
        <div className={style.content}>
          <div className={style.bigimgbox}>
            <img src={this.props.home.zhizaodata.brand && this.props.home.zhizaodata.brand.list_pic_url} alt="" />
          </div>
          <div className={style.discribe}>
            {this.props.home.zhizaodata.brand && this.props.home.zhizaodata.brand.simple_desc}
          </div>
          <div className={style.branditemwrap}>
            <ul className={style.ul}>
              {
                this.props.home.branddata.goodsList && this.props.home.branddata.goodsList.map((item, i) => {
                  return <li key={item.id} className={style.li}>
                    <NavLink to={`/shoppingDetail/${item.id}`}>
                      {/* to={`/Qiquclassify/${item.id}`} */}
                      <img src={item.list_pic_url} alt={item.name} />
                      <p>{item.name}</p>
                      <p className={style.price}>￥{item.retail_price}元</p>
                    </NavLink>
                  </li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Zhizaoshang