import React, { Component, Fragment } from 'react'
import { inject, observer } from "mobx-react"
import { Icon } from 'antd';
import { NavLink } from "react-router-dom"
// 引入 lazyimg
import  { withLazyimg } from 'react-lazyimg-component';
// 引入 volecity.js
import 'velocity-animate';
import 'velocity-animate/velocity.ui';
import style from "./specialDetail.module.scss"
//引用评论组件
import CommentList from "../../../component/commentList/index"
@inject('special')
@observer
class SpecialDetail extends Component {
    componentDidMount() {
        let id = this.props.match.params.id

        this.props.special.routerTo(id)
        //调取评论函数
        this.props.special.specialListD(id, 1)
        this.props.special.specialListRel(id)
    }
    render() {
        let id = this.props.match.params.id
        let commentList = this.props.special.specialListData && this.props.special.specialListData;
        let count = this.props.special.specialListCount;
        const config = {
            placeholder: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1564625027&di=57a3d087b1f5ae7340722751e915abd7&src=http://hbimg.b0.upaiyun.com/2803b55a526758deaeb9409eb36207df3126376c660c-TwELia_fw658',
            js_effect: 'transition.shrinkIn', // 支持 velocity.js 动画效果
            appear: null, // 元素出现在可视窗口时触发appear钩子函数
            threshold: 1000, // 指定触发阈值
        };
        const Lazy = withLazyimg(config);
        return (
            <div className={style.DetailBox}>
                <div className={style.headerBox}>
                    <p><NavLink to="/layer/special">&lt;</NavLink></p>
                    <header className={style.header}>
                        {this.props.special.specialDetailData.title}
                    </header>
                </div>
                <div className={style.specialCoen}>
                    <div className={style.imgbox} dangerouslySetInnerHTML={{ __html: this.props.special.specialDetailData.content }}>
                    </div>
                    <div className={style.commentWrap}>
                        <div className={style.titleLine}>
                            <div className={style.titleName}>精选留言</div>
                            {/* onClick={this.postWrite.bind(this)} */}
                            <div className={style.titleIcon} onClick={() => { this.props.history.push(`/Comment/${id}`) }}><Icon type="edit" /></div>
                        </div>
                        {count > 0 ?
                            <Fragment>
                                <CommentList commentList={commentList}></CommentList>
                            </Fragment> :
                            <div className={style.noComment}>
                                <div className={style.noCommentIcon}>
                                    <div>等你来留言</div>
                                </div>
                            </div>
                        }

                        {count > 5 ?
                            <NavLink to={`/SpecialList/${id}?typeId=1&&size=100`} className={style.moreComment}>
                                查看更多评论
                       </NavLink> : null
                        }
                    </div>

                    <div className={style.rel}>
                        <p className={style.reltitleName}>推荐专题</p>
                        {
                            this.props.special.specialRelData && this.props.special.specialRelData.map((item, index) => {
                                return (
                                    <a href={`/SpecialDetail/${item.id}`} className={style.a}>
                                        <dl className={style.special} >
                                            <dt>
                                                <Lazy
                                                    className={style.lazy}
                                                    src={item.scene_pic_url}
                                                />
                                                {/* <img src={item.scene_pic_url} alt=""/> */}
                                            </dt>
                                            <dd>
                                                {item.title}
                                            </dd>
                                        </dl>
                                    </a>

                                )
                            })
                        }
                    </div>


                </div>

            </div>
        )
    }
}

export default SpecialDetail
