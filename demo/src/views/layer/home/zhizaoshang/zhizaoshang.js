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
    // this.props.home.getbrandData()
  }
  render() {

    return (
      <div className={style.con}>
        <header className={style.header}>
          <p className={style.titleft}>&lt;</p>
          <p className={style.tit}>{this.props.home.zhizaodata.brand && this.props.home.zhizaodata.brand.name}</p>
          <p className={style.titright}></p>
        </header>
        <div className={style.content}>
          <div className={style.bigimgbox}>
            <img src={this.props.home.zhizaodata.brand && this.props.home.zhizaodata.brand.list_pic_url} alt="" />
          </div>
          <div  className={style.discribe}>
            {this.props.home.zhizaodata.brand && this.props.home.zhizaodata.brand.simple_desc}
          </div>
          <div className={style.branditemwrap}>
              <ul>
                <li>
                   <img src alt=""/>
                </li>
              </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Zhizaoshang