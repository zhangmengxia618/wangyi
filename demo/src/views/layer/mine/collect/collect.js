import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import style from './collect.module.scss'
import { SwipeAction, List } from 'antd-mobile';

@inject("collect")
@observer
class collect extends Component {
    componentDidMount(){
        this.props.collect.getCollectData({typeId:0})
    }
    render() {
        let list =this.props.collect.collectData;
        console.log(list);
        return (
            <div className={style.collect}>
                <div className={style.header}>
                    <h3>easyLikeGoods</h3>
                    <span onClick={()=>this.props.history.goBack()}>&lt;</span>
                </div>
                <div className={style.subject}>
                   {list&&list.map(file=>
                     <List key={file.id}>
                         <SwipeAction 
                        //   autoClose
                          right={[
                            {
                              text: '删除',
                              onPress: () => this.deteleBtn(file.value_id),
                              style: { backgroundColor: 'red', color: '#fff' },
                            }
                          ]}
                          >
                          <List.Item >
                             <dl style={{marginBottom:0}} >
                              <a href={`/shoppingDetail/${file.value_id}`}>
                                <dt><img src={file.list_pic_url} alt=""></img></dt>
                                <dd>
                                    <div style={{fontSize:".16rem"}}>{file.name}</div>
                                    <div style={{color:"#ccc"}}>{file.goods_brief}</div>
                                    <span>￥{file.retail_price}</span>
                                </dd>
                              </a>
                             </dl>
                         </List.Item>
                         </SwipeAction>
                     </List>
                    )}
                </div>
            </div>
        )
    }

    deteleBtn(id){
      this.props.collect.DeleteData({valueId:id,typeId:0})
      // console.log(id)
    }
}

export default collect
