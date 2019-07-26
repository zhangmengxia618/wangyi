import { observable, action } from "mobx";
import {Classfiy} from '../../services/classfiy.js'

export default class Home{
    // @observable 修饰属性
    @observable count;
    @observable rightData;
    constructor(){
        this.count=[]
        this.rightData=[]
    }
    // @action 修饰方法
    @action changeCount(){
        Classfiy().then(res=>{
            console.log('res...',res.data.data)
            this.count=res.data.data.categoryList
            this.rightData=res.data.data.currentCategory
            // console.log(this.rightData)
         
        })
    }
}

