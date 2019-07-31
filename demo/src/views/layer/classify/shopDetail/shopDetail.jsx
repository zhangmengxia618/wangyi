import React, { Component } from 'react'
import { inject, observer } from "mobx-react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Icon, Drawer } from "antd"
import 'antd-mobile/dist/antd-mobile.css';
import ReactSwipe from 'react-swipe';
import style from "./shopDetail.module.scss"
import ClassDetailList from "../../../component/classDetailList/classDetailList"
import CommentList from "../../../component/commentList/index"
@inject('classify')
@observer
class ShopDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storeData: [],
            visible:false,
        };

        this.swiperContainer = React.createRef();
    }
    render() {
        let shoppingData = this.props.classify.shoppingData;
        let info = shoppingData.info && shoppingData.info;
        let shoppRelatedData = this.props.classify.shoppRelatedData;
        let comment = shoppingData.comment && shoppingData.comment.data;
        let opt = {
            auto: 1000,
            autoPlay: true, //是否开启自动播放
            currentPoint: 1, //初始位置，默认从0即第一个元素开始
        }
        //弹框出现的头像
        let img = info && info.primary_pic_url;
        let num = shoppingData && shoppingData.productList;
        //商品id
        let paramsId=this.props.match.params.id;
        console.log(paramsId)
        return (
            <div className={style.shopDetalBox}>
                {/* 头部· */}
                <div className={style.headerBox}>
                    <p><NavLink to="/layer/classify">{"<"}</NavLink></p>
                    <header className={style.header}>
                        {info && info.name}
                    </header>
                </div>
               {/* 内容 */}
                <div className={style.centrnBox}>
                    <div className={style['card-swipe']} >
                        <ReactSwipe className={style["card-slide"]} swipeOptions={opt}>
                            {
                                shoppingData.gallery && shoppingData.gallery.map((item, index) => {
                                    return (

                                        <div key={index + "img"} className={style['img-box']}><img src={item.img_url} alt="" /></div>
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
                            <h2>{info && info.name}</h2>
                            <p>{info && info.goods_brief}</p>
                            <h3>￥{info && info.retail_price}</h3>
                        </div>
                        <div className={style.count} onClick={() => this.goodsMask()}>
                            <span></span>
                            <p><span className={style.spanCount}>x{this.props.classify.count}</span><span>选择品格 > </span></p>
                        </div>
                        </div>
                    <div className={style.comment}>
                        {
                            comment && comment.pic_list ? <div>
                                <ul>
                                    <li>评论{(shoppingData.comment && shoppingData.comment.count)}</li>
                                    <li onClick={() => this.props.history.push(`/listDetail/${this.props.match.params.id}`)} className={style.all}>查看全部 ></li>
                                </ul>

                                <dl>
                                    <dt>
                                        <p>{'user_info' in comment && comment && 'username' in comment && comment.user_info ? comment && comment.user_info.username : '匿名用户'}</p>
                                        <p>{comment && comment.add_time}</p>
                                    </dt>
                                    <dd>
                                        <p>{comment && comment.content}</p>
                                        <h3>
                                            {
                                                comment && comment.pic_list === undefined ? null : comment && comment.pic_list.map((item, index) => {
                                                    return <img src={item.pic_url} key={index + "im"} alt="" />
                                                })
                                            }
                                        </h3>

                                    </dd>
                                </dl>
                            </div> : null
                        }

                    </div>

                    <div className={style.product}>
                        <h2>—— 商品参数 ——</h2>
                        {
                            shoppingData.attribute && shoppingData.attribute.map((item, index) => {
                                return (
                                    <dl key={index + "cs"}>
                                        <dt>{item.name}</dt>
                                        <dd>{item.value}</dd>
                                    </dl>
                                )
                            })
                        }

                    </div>

                    <div dangerouslySetInnerHTML={{ __html: info && info.goods_desc }} className={style.goodsDesc}>
                    </div>

                    <div className={style.issue}>
                        <h2>—— 常见问题 ——</h2>
                        {
                            shoppingData.issue && shoppingData.issue.map((item, index) => {
                                return (
                                    <div key={index + "s"}>
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
                {/* 下 */}
                {console.log(this.props)}
                <div className={style.footer}>
                    {console.log(this.props.classify.addorShow)}
                        <span onClick={()=>{this.collect(this.props.match.params.id)}}  className={this.props.classify.addorShow?style.collect:''}><Icon type="star"  /></span>
                        <span onClick={()=>this.props.history.push('/layer/shoppingCart')}><Icon type="shopping-cart" />{this.props.classify.careOKValue}</span>
                        <div className={style.btn}>
                            <button style={{ background: "orangered" }} onClick={() => this.goodsMask()}>加入购物车</button>
                            <button style={{ background: "skyblue" }}>立即购买</button>
                        </div>
                </div>
                {/* 弹框  */}
                <Drawer
                    placement="bottom"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >     
                 
                        <div className={style['goodscart_list']}>
                            <dl>
                                <dt>
                                    <img src={img} alt=""></img>
                                </dt>
                                <dd>
                                    <div>单价：<span>￥{num && num[0].retail_price}</span></div>
                                    <div>库存：<span>￥{num && num[0].goods_number}</span></div>
                                    <div>已选择：</div>
                                </dd>
                            </dl>
                            <div className={style['goods_money']}>
                                <div>数量:</div>
                                <div>
                                    <span onClick={()=>{this.btn("-",this.props.classify.count)}}>-</span>
                                    <span>{this.props.classify.count}</span>
                                    <span onClick={()=>{this.props.classify.changeCount('+')}}>+</span>
                                </div>
                            </div>
                           
                            <div className={style['goodsBtn']}>
                                <button style={{ background: "orangered" }} onClick={()=>this.addCart(num&&num[0].id)}>加入购物车</button>
                                <button style={{ background: "skyblue" }}>立即下单</button>
                            </div>
                        </div>
                    </Drawer>
            </div>
        )
    }
    componentDidMount() {
        this.props.classify.shopList(this.props.match.params.id)
        this.props.classify.related(this.props.match.params.id)
        this.props.classify.goodsCountD()
       
    }
    

    goodsMask() {
        this.setState({
            visible: true,
        });
    }
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    btn(jian,count){
        if(count==0){
             return 
        }
        this.props.classify.changeCount(jian)
    }

    collect(id){
        this.props.classify.addorD(id)
        // this.setState({
        //     flag:!this.props.classify.addorShow
        // })
        // if(this.state.flag===false){
        //     console.log(123135465456)
        // }
    }

    
    addCart(numId){
        this.props.classify.addCartD({goodsId:this.props.match.params.id,number:this.props.classify.count,productId:numId})
        this.props.classify.goodsCountD()
    }

    
}

export default ShopDetail
