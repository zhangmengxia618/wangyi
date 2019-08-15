import React, { Component } from 'react'
import {inject,observer} from "mobx-react"
import style from "././classify.module.scss"

//右边组件
import ClassRight from "../../component/classRight/classRight"
@inject('classify')
@observer
class Classify extends Component {
    state={
        flag:0
    }
    componentDidMount(){
       this.props.classify.ClassifyData()
    }
    render() {
        let categoryList=this.props.classify.categoryList;
        let currentCategory=this.props.classify.currentCategory;

        return (
            <div className={style.classifyBox}>
                <div className={style.hesederBox}>
                    <header>
                        <p onClick={()=>this.props.history.push('/search')}>搜索商品,共239宽好物</p>
                    </header>
                </div>
                <div className={style.centen}>
                    <div className={style.classLift}>
                        <ul>
                            {
                               categoryList&&categoryList.map((item,index)=>{
                                   return <li key={index+"d"} onClick={()=>{this.btn(item.id,index)}} className={this.state.flag===index?style.active:''}>{item.name}</li>
                               })
                            }
                        </ul>
                    </div>
                   <ClassRight currentCategory={currentCategory}></ClassRight>
                </div>
                
            </div>
           
        )
    }

    btn(id,index){
        this.props.classify.ClickData(id)
        this.setState({
           flag:index
        })
    }
}

export default Classify
