import React, { Component } from 'react'
import {withRouter,NavLink} from "react-router-dom"
import style from "./ClassDetailList.module.scss"
import ProgressiveImage from 'react-progressive-image';
export class ClassDetailList extends Component {
    render() {
        let data=this.props.data;
        return (
            <div className={style.ClassDetail}>
                {
                    data&&data.map((item,index)=>{
                        return (
                                <dl key={index+"zx"} onClick={()=>{this.props.history.push(`/shoppingDetail/${item.id}`)}}>
                                     <NavLink to={`/shoppingDetail/${item.id}`}>
                                        <dt>
                                            <ProgressiveImage src={item.list_pic_url} placeholder="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1442199377,3551938875&fm=26&gp=0.jpg">
                                                {src => <img src={src} alt="an image" />}
                                            </ProgressiveImage>
                                            {/* <img src={item.list_pic_url} alt=""/> */}
                                        </dt>
                                        <dd>
                                            <h4>{item.name}</h4>
                                            <p>{item.retail_price}</p>
                                        </dd>
                                    </NavLink>
                                </dl>
                        )
                    })
                }
            
            </div>
        )
    }
}

export default withRouter(ClassDetailList)
