import React, { Component } from 'react';
import style from './address.module.scss';
import { inject, observer } from 'mobx-react'
import { NavLink } from 'react-router-dom'
import { List, InputItem, Picker } from 'antd-mobile';
import { createForm } from 'rc-form';
import addressList from './addressdata'

@inject('address')
@observer

class Address extends Component {
  constructor() {
    super();
    this.state = {
      flag: false,
      name: '',
      phone: '',
      add: '',
      addarr: [],
      isdefault: false
    }
    this.save = this.save.bind(this)
    this.deladdress = this.deladdress.bind(this)
  }
  save() {
    this.props.address.saveAddress({
      name: this.state.name,
      address: this.state.add,
      mobile: this.state.phone,
      is_default: this.state.isdefault,
      province_id: this.state.addarr[0],
      city_id: this.state.addarr[1],
      district_id: this.state.addarr[2],
    })
    console.log(this.props.history);
    this.setState({
      flag:false
    })
    this.props.address.getAddress()
  }
  deladdress(id){
    this.props.address.delAddress({id:id})
    this.props.address.getAddress()
  }
  componentDidMount() {
    this.props.address.getAddress()
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      this.state.flag === false ? <div className={style.con}>
        <header className={style.header}>
          <p className={style.left}>&lt;</p>
          <p className={style.tit}>地址管理</p>
          <p className={style.right}></p>
        </header>
        <section className={style.section}>
          <ul className={style.ul}>
            {
              this.props.address.addressList && this.props.address.addressList.map((item, i) => {
                return <li key={item.id} className={style.li} >
                  <div className={style[`${item.is_default === 1 ? 'leftline' : ''}`]}></div>
                  <div className={style.name}>{item.name}</div>
                  <div className={style.info}>
                    <p className={style.phone}>{item.mobile}</p>
                    <p className={style.region}>{item.full_region}</p>
                    <p className={style.address}>{item.address}</p>
                  </div>
                  <div className={style.del} onClick={()=>this.deladdress(item.id)}>删除</div>
                </li>
              })
            }

          </ul>
        </section>
        <footer className={style.footer} onClick={() => this.setState({ flag: true })}>
          新建地址
        </footer>
      </div> : <div className={style.con}>
          <header className={style.header}>
            <p className={style.tit}>新增地址</p>
          </header>
          <section className={style.wrap}>
            <List>
              {/* 姓名 */}
              <InputItem
                {...getFieldProps('name')}
                className={style.inp}
                placeholder="姓名"
                value={this.state.name}
                onChange={(e) => { this.setState({ name: e }) }}
              ></InputItem>
              {/* 电话号码 */}
              <InputItem
                {...getFieldProps('phone')}
                className={style.inp}
                type="phone"
                placeholder="电话号码"
                value={this.state.phone}
                onChange={(e) => { this.setState({ phone: e }) }}
              ></InputItem>
              {/* 地区选择 */}
              <Picker
                data={addressList}
                {...getFieldProps('district', {
                })}
                onOk={e => this.setState({ addarr: e })}
                className={style.pick}
              >
                <List.Item className={style.inp}></List.Item>
              </Picker>

              {/* 详细地址 */}
              <InputItem
                {...getFieldProps('addr')}
                className={style.inp}
                placeholder="详细地址"
                value={this.state.add}
                onChange={(e) => { this.setState({ add: e }) }}
              ></InputItem>
            </List>
            <div className={style.defaultaddwrap}>
              设置默认地址
              &nbsp;
              {
                this.state.isdefault === false ? <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC" alt='' className={style.defaultimg} onClick={() => this.setState({ isdefault: !this.state.isdefault })} /> :
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg==" alt='' className={style.defaultimg} onClick={() => this.setState({ isdefault: !this.state.isdefault })} />
              }
            </div>

          </section>
          <div className={style.foot}>
            <div className={style.cancel} onClick={() => this.setState({ flag: false })}>取消</div>
            <div className={style.save} onClick={this.save}>保存</div>
          </div>
        </div>
    )
  }
}


export default createForm()(Address);