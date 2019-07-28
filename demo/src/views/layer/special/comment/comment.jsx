import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Redirect,Switch,NavLink,withRouter} from "react-router-dom"
import style from "./specialDetail.module.scss"
import {inject,observer} from "mobx-react"
@inject('special')
@observer
class Comment extends Component {
    render() {
        let id= this.props.match.params.id;
        console.log(this.props.match.params.id)
        return (
            <div>
                 <div className={style.headerBox}>
                    <p><NavLink  to="/layer/special">{"<"}</NavLink></p>
                    <header className={style.header}>
                        {this.props.special.specialDetailData.title}
                    </header>
                </div>
               <textarea rows="10" cols="30" value={this.props.special.nameCom} onChange={(e)=>{this.props.special.changenameCom(e.target.value)}}/>
               <div className={style.btnBox}>
                    <button>清空</button>
                    <a href={`/SpecialDetail/${id}`}>
                        <button onClick={()=>{this.props.special.specialPostData(this.props.special.nameCom,1,this.props.match.params.id)}}>确定</button>
                    </a>
                    
               </div>
            </div>
        )
    }
}

export default Comment
