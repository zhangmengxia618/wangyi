import React, { Component } from 'react'
import {inject,observer} from "mobx-react"
import { NavLink} from "react-router-dom";
import style from "./listDetail.module.scss"
// 引入 lazyimg
import { withLazyimg } from 'react-lazyimg-component';
// 引入 volecity.js
import 'velocity-animate';
import 'velocity-animate/velocity.ui';
@inject('classify')
@observer
class ListDetail extends Component {
    render() {
        let commentListData=this.props.classify.commentListData;
        // 配置
        const config = {
            placeholder: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1564625027&di=57a3d087b1f5ae7340722751e915abd7&src=http://hbimg.b0.upaiyun.com/2803b55a526758deaeb9409eb36207df3126376c660c-TwELia_fw658',
            js_effect: 'transition.shrinkIn', // 支持 velocity.js 动画效果
            appear: null, // 元素出现在可视窗口时触发appear钩子函数
            threshold: 1000, // 指定触发阈值
        };
        const Lazy = withLazyimg(config);
        return (
            <div>
                <div className={style.headerBox}>
                    <p><NavLink  to="/layer/classify">{"<"}</NavLink></p>
                    <header className={style.header}>
                        查看全部评论
                    </header>
                </div>
                <div className={style.commentLD}>
                    {
                        commentListData&&commentListData.map((item,index)=>{
                            return (
                                <dl key={index+"pl"}>
                                    <dt>
                                            {/* <p>匿名评论</p> */}
                                        <p>{'user_info' in item && 'username' in item.user_info?item.user_info.username:'匿名用户'}</p>
                                        <p>{item&&item.add_time}</p>
                                    </dt>
                                    <dd>
                                        <p>{item&&item.content}</p>
                                        {
                                            item&&item.pic_list.map((val,index)=>{
                                                return   <Lazy
                                                            className={style.lazy}
                                                            src={val.pic_url}
                                                            />
                                                // <img src={val.pic_url} key={index+"im"} alt=""/>
                                            })
                                        }
                                    </dd>
                            </dl>         
                            )
                        })
                    }
                </div>
                
               
            </div>
        )
    }

    componentDidMount(){
        this.props.classify.commentL(this.props.match.params.id)
    }
}

export default ListDetail
