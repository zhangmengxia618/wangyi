import { observable, action } from "mobx";
import {special} from "../../services"
export default class Login{
    // @observable 修饰属性
    @observable specialData = [];
    // @action 修饰方法
    @action specialD(){
        special().then(res=>{
            this.specialData=res.data.data;
            // console.log(res.data.data)
        })
        // this.paw=type;
    }
}