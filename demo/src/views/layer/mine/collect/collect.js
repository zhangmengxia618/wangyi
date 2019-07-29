import React,{Component} from 'react';
import {inject,observer} from 'mobx-react'
import style from './collect.module.scss'


@inject('collect')
@observer

class Collect extends Component{
  componentDidMount() {
    this.props.collect.getCollectData({typeId:0})
  }
  render() {
    return (
      <div className={style.con}>

      </div>
    )
  }
}


export default Collect