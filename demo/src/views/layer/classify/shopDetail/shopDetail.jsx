import React, { Component } from 'react'
import {inject,observer} from "mobx-react";
import { BrowserRouter as Router,NavLink} from "react-router-dom";
import {Icon} from "antd"
import ReactSwipe from 'react-swipe';
import style from "./shopDetail.module.scss"
import ClassDetailList from "../../../component/classDetailList/classDetailList"
import CommentList from "../../../component/commentList/index"
@inject('classify')
@observer
class ShopDetail extends Component {
    render() {
        let shoppingData=this.props.classify.shoppingData;
        let info=shoppingData.info&&shoppingData.info;
        let shoppRelatedData=this.props.classify.shoppRelatedData;
        console.log(shoppingData.comment&&shoppingData.comment.data)
        let opt={
            auto: 1000,
            autoPlay: true, //是否开启自动播放
            currentPoint: 1, //初始位置，默认从0即第一个元素开始
        }
        return (
            <div className={style.shopDetalBox}>
                <div className={style.headerBox}>
                    <p><NavLink  to="/layer/classify">{"<"}</NavLink></p>
                    <header className={style.header}>
                        {info&&info.name}
                    </header>
                </div>
                <ReactSwipe className="card-slide" swipeOptions={opt}>
                    {
                        shoppingData.gallery&&shoppingData.gallery.map((item,index)=> <div key={index+"img"}><img src={item.img_url} alt=""/></div>)
                    }
                    
                </ReactSwipe>
                <div className={style.hint}>
                   <ul>
                       <li><span>★</span>30天无忧退货</li>
                       <li><span>★</span>48小时快速退款</li>
                       <li><span>★</span>满88元免邮费</li>
                   </ul>
                </div>
                <div className={style.introduceH}>
                    <div className={style.introduce}>
                        <h2>{info&&info.name}</h2>
                        <p>{info&&info.goods_brief}</p>
                        <h3>￥{info&&info.retail_price}</h3>
                    </div>
                    <div className={style.count}>
                        <span></span>
                        <p><span className={style.spanCount}>x 0</span><span>选择品格 > </span></p>
                    </div>  
                </div>
                <div className={style.comment}>   
                   <ul>
                       <li>评论{(shoppingData.comment&&shoppingData.comment.count)}</li>
                       <li>查看全部 》</li>
                   </ul>
                   {/* {
                       shoppingData.comment&&shoppingData.comment.data.map((item,index)=>{
                           console.log(item)
                       })
                   } */}
                   <dl>
                       <dt>
                          <p>米明</p>
                          <p>20126465</p>
                       </dt>
                       <dd>
                          <p>cdsbcsdjkcbsdjkc</p>
                          <img src="" alt=""/>
                       </dd>
                   </dl>         
               </div>
               
                <div className={style.product}>
                    <h2>—— 商品参数 ——</h2>
                    {
                        shoppingData.attribute&&shoppingData.attribute.map((item,index)=>{
                            return (
                                <dl key={index+"cs"}>
                                    <dt>{item.name}</dt>
                                    <dd>{item.value}</dd>
                                </dl>
                            )
                        })
                    }
                    
                </div>
               
               <div  dangerouslySetInnerHTML={{__html:info&&info.goods_desc}}>
               </div>

               <div className={style.issue}>
                    <h2>—— 常见问题 ——</h2>
                    {
                        shoppingData.issue&&shoppingData.issue.map((item,index)=>{
                            return (
                                <div key={index+"s"}>
                                    <h3><Icon type="check" />{item.question}</h3>
                                    <p>{item.answer}</p>
                                </div>
                            )
                        })
                    }
                </div>
                
                <div className={style.like}>
                  <h2>—— 大家都在看 ——</h2>
                  <ClassDetailList data={shoppRelatedData}></ClassDetailList>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.classify.shopList(this.props.match.params.id)
        this.props.classify.related(this.props.match.params.id)
        // 
        

        
    }
}

export default ShopDetail
