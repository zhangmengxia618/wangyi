import React, { Component } from 'react'
import { Icon } from 'antd';
import style from "./homeList.module.scss"
export class Homelist extends Component {
    state={
        list:[{ 
            "icon":"youtube",
            "name":"居家"
        },{ 
            "icon":"bulb",
            "name":"餐厨"
        },{ 
            "icon":"compass",
            "name":"配件"
        },{ 
            "icon":"database",
            "name":"服装"
        },{ 
            "icon":"shop",
            "name":"志趣"
        }]
    }
    render() {
        let {list}=this.state;
        console.log(this.state)
        return (
            <ul className={style.homelist}>
                {
                    list.map((item,index)=><li key={index+"l"}><Icon type={item.icon} />{item.name}</li>)
                }
            </ul>
        )
    }
}

export default Homelist
