import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
import style from "./special.module.scss";
// 引入 lazyimg
import  { withLazyimg } from 'react-lazyimg-component';
// 引入 volecity.js
import 'velocity-animate';
import 'velocity-animate/velocity.ui';
@inject('special')
@observer
class Special extends Component {
    componentDidMount() {
        this.props.special.specialD()
    }
    render() {
        const config = {
            placeholder: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1564625027&di=57a3d087b1f5ae7340722751e915abd7&src=http://hbimg.b0.upaiyun.com/2803b55a526758deaeb9409eb36207df3126376c660c-TwELia_fw658',
            js_effect: 'transition.shrinkIn', // 支持 velocity.js 动画效果
            appear: null, // 元素出现在可视窗口时触发appear钩子函数
            threshold: 1000, // 指定触发阈值
        };
        const Lazy = withLazyimg(config);
        return (
            <div className={style.con}>
                {
                    this.props.special.specialData && this.props.special.specialData.map((item, index) => {
                        return (
                            <a href={`/SpecialDetail/${item.id}`} className={style.a} key={item.id}>
                                <dl className={style.special} >
                                    <dt>
                                        <Lazy
                                            className={style.lazy}
                                            src={item.scene_pic_url}
                                            />
                                        {/* <img src={item.scene_pic_url} alt="" /> */}
                                    </dt>
                                    <dd>
                                        <h2>{item.title}</h2>
                                        <p>{item.subtitle}</p>
                                        <h3>{item.price_info}元起</h3>
                                    </dd>
                                </dl>
                            </a>

                        )
                    })
                }

            </div>
        )
    }
}

export default Special
