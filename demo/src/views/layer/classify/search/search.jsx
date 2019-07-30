import React, { Component,Fragment } from 'react'
import style from "./search.module.scss"
import {Icon} from "antd";
import {inject,observer} from "mobx-react";
import ClassDetailList from "../../../component/classDetailList/classDetailList"
@inject('classify')
@observer
class Search extends Component {
    state={
        name:'',
        flag:-1,
        fenleiFlag:true
    }
    render() {
        // /热门渲染
        let hotKeywordList=this.props.classify.hotKeywordList;
        //历史渲染
        let historyKeywordList=this.props.classify.historyKeywordList;
        //input 默认值
        let defaultKeyword=this.props.classify.defaultKeyword;
        //模糊搜索结果
        let KeywordData=this.props.classify.KeywordData;
       //模糊搜索相对应列表
        let searchListData=this.props.classify.searchListData;
        //全部 居家
        // console.log(this.props.classify.searchListData)
        let filterCategory=this.props.classify.searchListData.filterCategory;
        console.log(filterCategory)
        return (
            <div className={style.searchBox}>
                <header className={style['header']}>
                    <span> {'<'} </span>
                    <input 
                        type="text" 
                        placeholder={defaultKeyword&&defaultKeyword.keyword} 
                        value={this.props.classify.Keyword} 
                        onChange={(e)=>{this.changgeSear(e.target.value)}}
                        onKeyDown={(e)=>{this.keydownSear(e,e.target.value)}}
                        />
                    <span onClick={()=>{this.cancel()}}>取消</span>
                </header>
                {
                    this.state.name.length>0?
                    <Fragment>
                        {console.log(this.state.flag)}
                           
                          {
                              this.state.flag===1?
                             <Fragment>
                                 {
                                     <ClassDetailList data={searchListData}></ClassDetailList>?
                                     <div className={style.contenD}>
                                         <ul className={style.searchTop}>
                                             <li>综合</li>
                                             <li>价格<Icon type="up" /><Icon type="down" /></li>
                                             <li onClick={()=>{this.setState({fenleiFlag:!this.state.fenleiFlag})}}>
                                                 全部分类
                                            </li>
                                         </ul>
                                         <ol className={this.state.fenleiFlag?style.ol:style.active}>
                                                <li>全部</li>
                                                <li>局部</li>
                                            </ol>
                                         <div className={style.deyails}>
                                            <ClassDetailList data={searchListData}></ClassDetailList>
                                         </div>
                                       
                                     </div>:
                                      KeywordData&&KeywordData.map((item,index)=><p className={style.result} key={index+"mo"}>{item}</p>)
                                 }
                                 
                                  
                                  
                             </Fragment>:null
                             
                            
                          }
                      
                    </Fragment>:
                            <div>
                                 <div className={style.history}>
                                    <h3>历史记录</h3>
                                    <div className={style.historyCen}>
                                        {
                                            historyKeywordList&&historyKeywordList.map((item,index)=><span key={index+"his"} onClick={(e)=>{this.hisSearch(e.target.innerHTML)}}>{item}</span>)
                                        }
                                    </div>
                                </div>
                                <div className={style.hot}>
                                    <h3>热门搜索</h3>
                                    <div className={style.hotCen}>
                                        {
                                            hotKeywordList&&hotKeywordList.map((item,index)=><span key={index+"hot"} onClick={(e)=>{this.hisSearch(e.target.innerHTML)}}>{item.keyword}</span>)
                                        }/
                                    
                                    </div>
                                </div>
                            </div>
                }
            
              
            </div>
        )
    }

    componentDidMount(){
        this.props.classify.searchIndexData()
        
    }
    //onchange 事件
    changgeSear(keyWord){
        this.props.classify.searchHelper(keyWord)
        this.setState({
            name:keyWord,
            
        })
        this.props.classify.searchListD(keyWord)
    }
    //点击取消
    cancel(){
        this.setState({
            name:''
        })
        this.props.classify.Keyword=''
    }
    // 点击历史的每一个值
    hisSearch(item){
        this.props.classify.Keyword=item;
        this.props.classify.searchListD(item)
        this.setState({
            name:item
        })
       
    }

    //回车事件
    keydownSear(e,value){
        let theEvent = window.event || e;
        let code = theEvent.keyCode || theEvent.which || theEvent.charCode;
       if(code===13){
           console.log(value)
          this.props.classify.searchHelper(value)
          this.setState({
            flag:1
          })
          this.props.classify.searchListD(value)
       }
       
    }
}

export default Search
