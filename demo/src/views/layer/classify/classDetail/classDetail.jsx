import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { BrowserRouter as Router, NavLink } from "react-router-dom"
import style from "./classDetail.module.scss"
import ClassDetailList from "../../../component/classDetailList/classDetailList"
@inject('classify')
@observer
class ClassDetail extends Component {
    state = {
        flag: 0
    }
    render() {

        let brotherCategory = this.props.classify.brotherCategory.brotherCategory
        let currentCategory = this.props.classify.brotherCategory.currentCategory
        let brotherList = this.props.classify.brotherList;
        console.log(this.props.match.params.id)
        return (
            <div className={style.classifyBox}>
                <div className={style.headerBox}>
                    <p><NavLink to="/layer/classify">{"<"}</NavLink></p>
                    <header className={style.header}>
                        奇趣分类
                        {/* {this.props.special.specialDetailData.title} */}
                    </header>
                </div>
                <div className={style.classifyTop}>
                    <ul>
                        {
                            brotherCategory && brotherCategory.map((item, index) => {
                                return <li key={index + "i"} onClick={() => { this.classiftBtn(item.id, index) }} className={this.state.flag === index ? style.detailActive : ''}>{item.name}</li>
                            })
                        }
                    </ul>
                </div>
                <div className={style.classifText}>
                    <h2>{currentCategory && currentCategory.name}</h2>
                    <p>{currentCategory && currentCategory.front_name}</p>
                </div>

                <ClassDetailList data={brotherList}></ClassDetailList>

            </div>
        )
    }
    componentDidMount() {
        this.props.classify.NavData(this.props.match.params.id)
        this.props.classify.ClickList(this.props.match.params.id)
    }
    classiftBtn(id, index) {
        this.props.classify.ClickList(id)
        this.setState({
            flag: index
        })
    }
}

export default ClassDetail
