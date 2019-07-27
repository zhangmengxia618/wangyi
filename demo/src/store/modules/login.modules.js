import { observable, action } from "mobx";
import {logins} from "../../services"
import { setCookie, getCookie } from "../../utils/index";
export default class Login{
    // @observable 修饰属性
    @observable name = "";
    @observable paw = ""; 
    //向后台传递的值
    @observable btnLogin = {}; 
    @observable data = ''; 
    // @action 修饰方法
    @action changeName(type){
        this.name=type;
    }
    
    @action changePaw(type){
        this.paw=type;
    }
    @action changeBtn(mobile,password){
        let obj={mobile,password}
        console.log(obj)
       logins(obj).then(res=>{
        console.log(res)
        if(res.errno===0){
            console.log(res.data.sessionKey)
            setCookie(res.data.sessionKey)
            this.data=res.errno
        }else{
            this.data=res.errno
        }
           this.btnLogin=res.data
       })
        // this.paw=type;
    }
}