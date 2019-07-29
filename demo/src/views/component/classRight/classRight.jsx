import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import style from "./classRight.module.scss"
import {inject,observer} from "mobx-react"
@inject('classify')
@observer
class ClassRight extends Component {
    render() {
        let currentCategory=this.props.currentCategory;
        console.log(currentCategory)
        return (
            <div className={style.classRight}>
                <div className={style.images}><img src={currentCategory.wap_banner_url} alt=""/></div>
                <h2>—— {currentCategory.name}分类 ——</h2>
                <div className={style.classRBox}>
                    {
                        currentCategory.subCategoryList&&currentCategory.subCategoryList.map((item,index)=>{
                           return (
                            <dl key={index+"c"} onClick={()=>this.rightBtn(item.id)}>
                                <dt><img src={item.wap_banner_url} alt=""/></dt>
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
