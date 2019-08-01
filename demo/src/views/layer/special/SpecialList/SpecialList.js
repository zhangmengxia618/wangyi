import React, { Component,Fragment} from 'react'
import {inject,observer} from "mobx-react"
import CommentList from "../../../component/commentList/index"
import style from "./specialDetail.module.scss"
@inject('special')
@observer
class SpecialList extends Component {
    constructor(props){
        super(props)
        let id=this.props.match.params.id;
        this.props.special.specialListD(id,1)
    }
    render() {
        let id=this.props.match.params.id;
        let commentList=this.props.special.specialListData&&this.props.special.specialListData;
        return (
            <Fragment>
                <div className={style.headerBox}>
                    <p><a href={`/SpecialDetail/${id}`}>{"<"}</a></p>
                    <header className={style.header}>
                        {this.props.special.specialDetailData.title}
                    </header>
                </div>
                <CommentList commentList ={commentList}></CommentList>
            </Fragment>
        )
    }
}

export default SpecialList
