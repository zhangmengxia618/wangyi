import React, { Component } from 'react'
import {inject,observer} from "mobx-react"
import { BrowserRouter as Router,NavLink} from "react-router-dom";
import style from "./listDetail.module.scss"
@inject('classify')
@observer
class ListDetail extends Component {
    render() {
        let commentListData=this.props.classify.commentListData
        console.log(this.props.classify.commentListData)
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
                            console.log(item)
                            return (
                                <dl>
                                    <dt>
                                            {/* <p>匿名评论</p> */}
                                        <p>{'user_info' in item && 'username' in item.user_info?item.user_info.username:'匿名用户'}</p>
                                        <p>{item&&item.add_time}</p>
                                    </dt>
                                    <dd>
                                        <p>{item&&item.content}</p>
                                        {
                                            item&&item.pic_list.map((val,index)=>{
                                                return  <img src={val.pic_url} key={index+"im"} alt=""/>
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
