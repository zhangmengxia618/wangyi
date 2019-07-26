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

     //添加评论数据
    //  @action specialPostData(id){
    //     specialPost({id:id}).then(res=>{
    //         console.log(res)
    //  })
    //     // specialRelated(id).then(res=>{
    //     //     this.specialRelData=res.data
    //     // })
    // }

    @action changenameCom(type){
        console.log(type)
        this.nameCom=type;
    }

    @action specialPostData(content,typeId,valueId){
        let obj={content,typeId:1,valueId:valueId*1}
        console.log(obj)
        specialPost(obj).then(res=>{
            console.log(res)
            // content:content,add_time:new Date().toLocaleString(),
            // const obj={valueId,typeId,size:this.specialListCount,page:1}
            // console.log(valueId)
            // specialList(obj).then(res=>{
            //     // content: "很不错", type_id: 1, value_id: 313, id: 1005, add_time: "2017-07-29 23:47:32",
            //     // let comen={content:content,add_time:new Date().toLocaleString(),type_id: 1, value_id: valueId*1,}
            //     console.log(res)
            //     // this.specialListData.push(comen);
            //     // this.specialListData=res.data.data;
            //     // console.log(this.specialListData)
            // })
            // this.specialListData=this.specialListData.push(objCen);
            // console.log()
           alert(res.data)
        // if(res.errno===0){
        //     setCookie(res.data.sessionKey)
        //     this.data=res.errno
        // }else{
        //     this.data=res.errno
        // }
        //    this.btnLogin=res.data
       })
        // this.paw=type;
    }
  


}