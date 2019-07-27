import { observable, action } from "mobx";
import {special,specialDetail,specialList,specialRelated,specialPost} from "../../services"
export default class Login{
    // @observable 修饰属性
    //获取所有数据
    @observable specialData = [];
    //获取详情数据
    @observable specialDetailData = [];
     //评论
     @observable specialListData = [];

     @observable specialListCount = 5;
     //专题数据
     @observable specialRelData = [];
     //评论初始值
     @observable nameCom = '';
    //渲染所有数据
    @action specialD(){
        special().then(res=>{
            this.specialData=res.data.data;
        })
    }
 
    //跳详情
    @action routerTo = async (id) => {
        const data = await specialDetail({id:id})
        this.specialDetailData=data.data;
    }

     //渲染评论数据
     @action specialListD(valueId,typeId,size,page){
        const obj={valueId,typeId,size:this.specialListCount,page:1}
        specialList(obj).then(res=>{
            console.log(res.data.data)
            this.specialListCount=res.data.count
            this.specialListData=res.data.data;
        })
    }

    //渲染相关数据
    @action specialListRel(id){
        specialRelated(id).then(res=>{
            this.specialRelData=res.data
        })
    }
    //初始评论
    @action changenameCom(type){
        console.log(type)
        this.nameCom=type;
    }
     //添加评论数据
    @action specialPostData(content,typeId,valueId){
        let obj={content,typeId:1,valueId:valueId*1}
        console.log(obj)
        specialPost(obj).then(res=>{
           alert(res.data)
       })
    }
    @action specialPostclear(){
        this.nameCom=' ';
    }
}