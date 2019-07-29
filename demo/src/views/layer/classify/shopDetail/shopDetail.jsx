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
        let comment=shoppingData.comment&&shoppingData.comment.data;
        let opt={
            auto: 1000,
            autoPlay: true, //是否开启自动播放
            currentPoint: 1, //初始位置，默认从0即第一个元素开始
        }
        console.log() 
        return (
            <div className={style.shopDetalBox}>
                <div className={style.headerBox}>
                    <p><NavLink  to="/layer/classify">{"<"}</NavLink></p>
                    <header className={style.header}>
                        {info&&info.name}
                    </header>
                </div>
                <div className={style['card-swipe']} >
                    <ReactSwipe className={style["card-slide"]} swipeOptions={opt}>
                    {/* <div><img src="http://p0.meituan.net/movie/6309046b820ed1de6971d8fe19d3c3d892027.jpg" alt=""/></div>
                    <div><img src="http://p0.meituan.net/movie/b06492e646a61c9bce9f08dc0f058c02151482.jpg" alt=""/></div>
                    <div><img src="http://p0.meituan.net/movie/b64e58008e4883490cf60b466b75e595103754.jpg" alt=""/></div> */}
        
                       
                         {
                            shoppingData.gallery&&shoppingData.gallery.map((item,index)=>{
                                return (
                                   
                                        <div key={index+"img"} className={style['img-box']}><img src={item.img_url} alt=""/></div>
                                )
                            })
                        }
                    </ReactSwipe> 
                </div>
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
                {
                    comment&&comment.pic_list?<div>
                        <ul>
                            <li>评论{(shoppingData.comment&&shoppingData.comment.count)}</li>
                            <li onClick={()=>this.props.history.push(`/listDetail/${this.props.match.params.id}`)}>查看全部 ></li>
                        </ul>
                    
                        <dl>
                            <dt>
                                <p>{'user_info' in comment&&comment && 'username' in comment&&comment.user_info?comment&&comment.user_info.username:'匿名用户'}</p>
                                <p>{comment&&comment.add_time}</p>
                            </dt>
                            <dd>
                                <p>{comment&&comment.content}</p>
                            <h3>
                                {
                                    comment&&comment.pic_list===undefined?null:comment&&comment.pic_list.map((item,index)=>{
                                        return  <img src={item.pic_url} key={index+"im"} alt=""/>
                                    })
                                }
                            </h3>
                            
                            </dd>
                        </dl>
                    </div>:null
                }
                  
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
               
               <div  dangerouslySetInnerHTML={{__html:info&&info.goods_desc}} className={style.goodsDesc}>
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
