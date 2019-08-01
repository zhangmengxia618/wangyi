import React, { Component } from 'react'
import style from './home.module.scss'
import ReactSwipe from 'react-swipe';
import { inject, observer } from 'mobx-react'
import { NavLink } from 'react-router-dom'
// 引入 lazyimg
import { withLazyimg } from 'react-lazyimg-component';
// 引入 volecity.js
import 'velocity-animate';
import 'velocity-animate/velocity.ui';



@inject('home')
@observer

class Home extends Component {
    componentDidMount() {
        this.props.home.getHomeData()
    }
    render() {
        const opt = {
            auto: 2000,
        };
        // 配置
        const config = {
            placeholder: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1564625027&di=57a3d087b1f5ae7340722751e915abd7&src=http://hbimg.b0.upaiyun.com/2803b55a526758deaeb9409eb36207df3126376c660c-TwELia_fw658',
            js_effect: 'transition.shrinkIn', // 支持 velocity.js 动画效果
            appear: null, // 元素出现在可视窗口时触发appear钩子函数
            threshold: 1000, // 指定触发阈值
        };
        const Lazy = withLazyimg(config);
        return (
            <div className={style.con}>
                <header className={style.header}>
                    <div className={style['card-swipe']} >
                        <ReactSwipe className={style['card-slide']} swipeOptions={opt}>
                            {
                                this.props.home.data.banner && this.props.home.data.banner.map((item, i) => {
                                    return <div key={i}><img src={item.image_url} alt="" /></div>
                                })
                            }

                        </ReactSwipe>

                    </div>
                </header>
                <section className={style.section}>
                    <ul className={style.banner}>
                        {
                            this.props.home.data.channel && this.props.home.data.channel.map((item, i) => {
                                return <li key={item.sort_order}>
                                    <NavLink to={`/Qiquclassify/${item.id}`} >
                                    <Lazy
                                        className="lazy"
                                        src={item.icon_url}   
                                        />
                                        <p>{item.name}</p>
                                    </NavLink>
                                </li>
                            })
                        }
                    </ul>
                    <div className={style.brand}>

                        <h2 className={style.h2}>品牌制造商直供</h2>
                        <ul className={style.brandUl}>
                            {
                                this.props.home.data.brandList && this.props.home.data.brandList.map((item, i) => {
                                    return <li className={style.brandli} key={item.id}>
                                        <NavLink to={`/Zhizaoshang/${item.id}`} >
                                        <p className={style.brandname}>{item.name}</p>
                                        <p className={style.brandprice}>{item.floor_price}元起</p>
                                        <Lazy
                                        className={style.lazy}
                                        src={item.new_pic_url}
                                        />
                                        {/* <img className={style.brandimg} src={item.new_pic_url} alt={item.name} /> */}
                                        </NavLink>
                                    </li>
                                })
                            }
                        </ul>

                    </div>
                    <div className={style.newDoodsList}>
                        <h2 className={style.h2}>新品首发</h2>
                        <ul className={style.newGoodsUl}>
                            {
                                this.props.home.data.newGoodsList && this.props.home.data.newGoodsList.map((item, i) => {
                                    return  <li className={style.newGoodsli} key={item.id}>
                                                <NavLink to={`/shoppingDetail/${item.id}`}>
                                                    <Lazy
                                                        className={style.lazy}
                                                        src={item.list_pic_url}
                                                    />
                                                    {/* <img className={style.newGoodsimg} src={item.list_pic_url} alt={item.name} /> */}
                                                    <p className={style.newGoodsname}>{item.name}</p>
                                                    <p className={style.newGoodsprice}>￥{item.retail_price}</p>
                                                </NavLink>
                                         </li>
                                  
                                        
                                   
                                })
                            }
                        </ul>
                    </div>
                    <div className={style.hotGoodsList}>
                        <h2 className={style.h2}>人气推荐</h2>
                        <ul className={style.hotGoodsul}>
                            {
                                this.props.home.data.hotGoodsList && this.props.home.data.hotGoodsList.map((item, i) => {
                                    return < li className={style.hotGoodsli} key={item.id}>
                                        <Lazy
                                            className={style.lazy}
                                            src={item.list_pic_url}
                                        />
                                        {/* <img src={item.list_pic_url} alt={item.name} /> */}
                                        <NavLink to={`/shoppingDetail/${item.id}`}>
                                            <div className={style.hotGoodsdetail}>
                                            <p className={style.hotGoodsname}>{item.name}</p>
                                            <p className={style.hotGoodsbrief}>{item.goods_brief}</p>
                                            <p className={style.hotGoodsprice}>￥{item.retail_price}</p>
                                        </div>
                                        </NavLink>
                                        
                                    </li>
                                })

                            }
                        </ul>
                    </div>
                    <div className={style.topicList}>
                        <h2 className={style.h2}>专题精选</h2>
                        <ul className={style.topicListul}>
                            {
                                this.props.home.data.topicList && this.props.home.data.topicList.map((item, i) => {
                                    return <li key={item.id} className={style.topicListItem}>
                                         <Lazy
                                            className={style.lazy}
                                            src={item.list_pic_url}
                                        />
                                        <p>{item.title} <span className={style.topicprice}>￥{item.price_info}元起</span></p>
                                        <p className={style.subtitle}>{item.subtitle}</p>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className={style.categoryList}>
                        {
                            this.props.home.data.categoryList && this.props.home.data.categoryList.map((item, i) => {
                                return <div key={item.id} className={style.categoryitem}>
                                    <h2 className={style.h2}>{item.name}</h2>
                                    <ul className={style.categoryul}>
                                        {
                                            item.goodsList.map((item, i) => {
                                                return <li className={style.categoryli} key={item.id}>
                                                     <NavLink to={`/shoppingDetail/${item.id}`}>
                                                     <Lazy
                                                        className={style.lazy}
                                                        src={item.list_pic_url}
                                                    />
                                                        {/* <img src={item.list_pic_url} alt={item.name} /> */}
                                                        <p className={style.categoryname}>{item.name}</p>
                                                        <p className={style.categoryprice}>￥{item.retail_price}</p>
                                                     </NavLink>
                                                
                                                </li>
                                            })
                                        }
                                        <li className={style.addmore}>
                                            更多{item.name}好物<br />
                                        </li>
                                    </ul>
                                </div>
                            })
                        }
                    </div>
                </section>
            </div >
        )
    }
}

export default Home
