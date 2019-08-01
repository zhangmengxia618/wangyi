import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import style from "./classRight.module.scss"
import {inject,observer} from "mobx-react";
// 引入 lazyimg
import  { withLazyimg } from 'react-lazyimg-component';
// 引入 volecity.js
import 'velocity-animate';
import 'velocity-animate/velocity.ui';
@inject('classify')
@observer
class ClassRight extends Component {
    render() {
        let currentCategory=this.props.currentCategory;
        const config = {
            placeholder: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1564625027&di=57a3d087b1f5ae7340722751e915abd7&src=http://hbimg.b0.upaiyun.com/2803b55a526758deaeb9409eb36207df3126376c660c-TwELia_fw658',
            js_effect: 'transition.shrinkIn', // 支持 velocity.js 动画效果
            appear: null, // 元素出现在可视窗口时触发appear钩子函数
            threshold: 1000, // 指定触发阈值
        };
        const Lazy = withLazyimg(config);
        return (
            <div className={style.classRight}>
                <div className={style.images}>
                    <Lazy
                        className={style.lazy}
                        src={currentCategory.wap_banner_url}
                        />
                </div>
                <h2>—— {currentCategory.name}分类 ——</h2>
                <div className={style.classRBox}>
                    {
                        currentCategory.subCategoryList&&currentCategory.subCategoryList.map((item,index)=>{
                           return (
                            <dl key={index+"c"} onClick={()=>this.rightBtn(item.id)}>
                                <dt>
                                <Lazy
                                    className={style.lazy}
                                    src={item.wap_banner_url}
                                    />
                                </dt>
                                <dd>{item.name}</dd>
                            </dl>
                           )
                        })
                    }
                    
                
                </div>
            </div>
        )
    }

    rightBtn(id){
        this.props.classify.NavData(id)
        this.props.history.push(`/Qiquclassify/${id}`)
    } 
}

export default withRouter(ClassRight)
