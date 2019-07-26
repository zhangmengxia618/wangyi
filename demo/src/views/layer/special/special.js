import React, { Component } from 'react'
import {inject,observer} from "mobx-react"
import style from "./special.module.scss"
@inject('special')
@observer
class Special extends Component {
    componentDidMount(){
        this.props.special.specialD()
    }
    render() {
        console.log(this.props.special.specialData)
        return (
            <div>
                {
                 this.props.special.specialData&&this.props.special.specialData.map((item,index)=>{
                    //  console.log(item)
                     return (
                        <a href={`/SpecialDetail/${item.id}`} className={style.a}>
                             <dl className={style.special} >
                                <dt>
                                <img src={item.scene_pic_url} alt=""/>
                                </dt>
                                <dd>
                                    <h2>{item.title}</h2>
                                    <p>{item.subtitle}</p>
                                    <h3>{item.price_info}元起</h3>
                                </dd>
                            </dl>
                        </a>
                       
                     )
                 })   
                }
              
            </div>
        )
    }
}

export default Special
