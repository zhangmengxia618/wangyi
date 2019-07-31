import React, { Component,Fragment } from 'react'
import style from "./search.module.scss"
import {Icon} from "antd";
import {inject,observer} from "mobx-react";
import ClassDetailList from "../../../component/classDetailList/classDetailList"
import { BrowserRouter as Router, NavLink } from "react-router-dom";
@inject('classify')
@observer
class Search extends Component {
    state={
        name:'',
        flag:-1,
        fenleiFlag:true,
        index:0,
        show:true,
        type:'up'
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
        // //全部 居家
        // // console.log(this.props.classify.searchListData)
        // let filterCategory=this.props.classify.searchListData.filterCategory;
        // console.log(filterCategory)
        return (
            <div className={style.searchBox}>
                <header className={style['header']}>
                    <span><NavLink to="/layer/classify">{"<"}</NavLink> </span>
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
                          {
                              this.state.flag===1?
                             <Fragment>
                                 {
                                     <ClassDetailList data={searchListData}></ClassDetailList>?
                                     <div className={style.contenD}>
                                         <ul className={style.searchTop}>
                                             <li onClick={(e)=>{this.searchTopBtn(e,0)}} className={this.state.index===0?style.topActive:""}>综合</li>
                                             <li onClick={(e)=>{this.searchTopBtn(e,1)}} >
                                                 <span className={this.state.index===1?style.topActive:""}>价格</span>
                                                 
                                                 <Icon 
                                                 type="up"
                                                 onClick={()=>{this.moneySort("up")}} 
                                                 className={this.state.type==="up"?style.moeyIcon:""}
                                                 />
                                                 <Icon 
                                                 type="down"
                                                 onClick={()=>{this.moneySort("down")}} 
                                                 className={this.state.type==="down"?style.moeyIcon:""}
                                                 />
                                            </li>
                                             <li onClick={()=>{this.setState({fenleiFlag:!this.state.fenleiFlag})}}>
                                                 全部分类
                                            </li>
                                         </ul>
                                         <ol className={this.state.fenleiFlag?style.ol:style.active}>
                                                <li onClick={()=>{this.classify("全部")}}>全部</li>
                                                <li onClick={()=>{this.classify("局部")}}>局部</li>
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
                                    <h3>
                                        <span>历史记录</span>
                                        <span><Icon type="poweroff" onClick={()=>{this.detele()}}/></span>
                                    </h3>
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
        this.props.classify.searchListD({keyword:keyWord})
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
        this.setState({
            name:item,
            show:false,
            flag:1
        })
        this.props.classify.Keyword=item;
        this.props.classify.searchListD({keyword:item})
     
    }

    //回车事件
    keydownSear(e,value){
        let theEvent = window.event || e;
        let code = theEvent.keyCode || theEvent.which || theEvent.charCode;
       if(code===13){
          this.props.classify.searchHelper(value)
          this.setState({
            flag:1
          })
          this.props.classify.searchListD({keyword:value})
       }
       
    }

    //点击综合 价格
    searchTopBtn(e,index){
         this.setState({
             index,
             flag:1
         })
         if(e.target.innerHTML==="综合"){
            this.props.classify.searchListD({keyword:this.props.classify.Keyword})
         }
    }
    //点击价格排序
    moneySort(type){
        if(type==='up'){
            this.props.classify.searchListD({keyword:this.props.classify.Keyword,sort:'price',order:'asc',categoryId:0})   
            this.setState({
                type:"up"
            })
        }

        if(type==='down'){
            this.props.classify.searchListD({keyword:this.props.classify.Keyword,sort:'price',order:'desc',categoryId:0})   
            this.setState({
                type:"down"
            })
        }
    }

    //删除
    detele(){
        this.props.classify.clearHistoryD()
    }

    //局部
    classify(type){
        if(type==="全部"){
            this.props.classify.searchListD({keyword:this.props.classify.Keyword,sort:'price',order:'asc',categoryId:0})   
        }
        if(type==="局部"){
            this.props.classify.searchListD({keyword:this.props.classify.Keyword,sort:'price',order:'asc',categoryId:0})   
        }
    }
}

export default Search
