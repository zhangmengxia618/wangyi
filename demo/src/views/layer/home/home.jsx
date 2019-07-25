import React, { Component ,Fragment} from 'react'
import ReactSwipe from 'react-swipe';
import style from "./home.module.scss"
import  HomeList from "../../component/homeList/homelist"
export class home extends Component {
    render() {
        let opt = {
            auto: 1000,
            autoPlay: true, //是否开启自动播放
            currentPoint: 1, //初始位置，默认从0即第一个元素开始
          }
        return (
            <div>
              <div className="card-swipe" >
                    <ReactSwipe className="card-slide" swipeOptions={opt}>
                        <div><img src="http://p0.meituan.net/movie/6309046b820ed1de6971d8fe19d3c3d892027.jpg" alt=""/></div>
                        <div><img src="http://p0.meituan.net/movie/b06492e646a61c9bce9f08dc0f058c02151482.jpg" alt=""/></div>
                        <div><img src="http://p0.meituan.net/movie/b64e58008e4883490cf60b466b75e595103754.jpg" alt=""/></div>
                    </ReactSwipe>
                </div>
                <HomeList></HomeList>
                <div className={style.manufacturer}> 
                    <h2>品牌制造商直供</h2>
                    <div className={style.HomeCen}>
                        <dl>
                            <dt>123</dt>
                            <dd>123</dd>
                        </dl>
                        <dl>
                            <dt>123</dt>
                            <dd>123</dd>
                        </dl>
                        <dl>
                            <dt>123</dt>
                            <dd>123</dd>
                        </dl>
                        <dl>
                            <dt>123</dt>
                            <dd>123</dd>
                        </dl>
                    </div>
                </div>
            </div>
        )
    }
}

export default home
