import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import style from "./ClassDetailList.module.scss"
export class ClassDetailList extends Component {
    render() {
        let data=this.props.data;
        console.log()
        return (
            <div className={style.ClassDetail}>
                {
                    data&&data.map((item,index)=>{
                        return (
                            <dl key={index+"zx"} onClick={()=>{this.props.history.push(`/shoppingDetail/${item.id}`)}}>
                                <dt><img src={item.list_pic_url} alt=""/></dt>
                                <dd>
                                    <h4>{item.name}</h4>
                                    <p>{item.retail_price}</p>
                                </dd>
                            </dl>
                        )
                    })
                }
            
            </div>
        )
    }
}

export default withRouter(ClassDetailList)
