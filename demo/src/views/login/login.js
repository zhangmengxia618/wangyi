import React, { Component } from 'react'
import styles from './login.module.scss';
import { inject, observer } from "mobx-react"
@inject('login')
@observer
class Login extends Component {
  render() {
    // console.log(this.props.login.data)
    if (this.props.login.data === 0) {
      this.props.history.push('/layer/home')
    }
    return (
      <div className={styles.login}>
        <p><img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="" /></p>
        <input type="text" placeholder="请输入手机号码" value={this.props.login.name} onChange={(e) => { this.props.login.changeName(e.target.value) }} />
        <input type="password" placeholder="请输入登录密码" value={this.props.login.paw} onChange={(e) => { this.props.login.changePaw(e.target.value) }} />
        <button onClick={() => { this.props.login.changeBtn(this.props.login.name, this.props.login.paw) }}>登录</button>
      </div >
    );
  }
}

export default Login