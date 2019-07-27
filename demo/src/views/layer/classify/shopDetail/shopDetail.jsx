import React, { Component } from 'react'
import {inject,observer} from "mobx-react";
import { BrowserRouter as Router,NavLink} from "react-router-dom"
import ReactSwipe from 'react-swipe';
import style from "./shopDetail.module.scss"
@inject('classify')
@observer
class ShopDetail extends Component {
    render() {
        let shoppingData=this.props.classify.shoppingData;
        let info=shoppingData.info&&shoppingData.info;
        console.log(shoppingData)
        let opt={
            auto: 1000,
            autoPlay: true, //是否开启自动播放
            currentPoint: 1, //初始位置，默认从0即第一个元素开始
        }
        return (
            <div>
                <div className={style.headerBox}>
                    <p><NavLink  to="/layer/classify">{"<"}</NavLink></p>
                    <header className={style.header}>
                        {info&&info.name}
                    </header>
                </div>
                <ReactSwipe className="card-slide" swipeOptions={opt}>
                    {
                        shoppingData.gallery&&shoppingData.gallery.map((item,index)=> <div><img src={item.img_url} alt=""/></div>)
                    }
                    
                </ReactSwipe>
                <div className={style.introduce}>
                    <h2>{info&&info.name}</h2>
                    <p>{info&&info.goods_brief}</p>
                    <h3>￥{info&&info.retail_price}</h3>

                </div>
               <div  dangerouslySetInnerHTML={{__html:info&&info.goods_desc}}>
               </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.classify.shopList(this.props.match.params.id)
        

        
    }
}

export default ShopDetail
