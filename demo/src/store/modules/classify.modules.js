import { observable, action } from "mobx";
import {classCurrent,catalogCurrent,categoryData,categoryList,shoppDetail} from "../../services"
export default class Classify{
    // 左侧数据
    @observable categoryList = [];
    // 右侧数据
    @observable currentCategory = [];

    //详情头部数据
    @observable brotherCategory = [];
    
    //详情列表数据
    @observable brotherList = [];
    //商品购物详情
    @observable shoppingData = [];

    //渲染初始数据
    @action ClassifyData(){
        classCurrent().then(res=>{
            console.log(res.data)
            this.categoryList=res.data.categoryList;
            this.currentCategory=res.data.currentCategory;
        })
    }
   //点击左侧
    @action ClickData(id){
        catalogCurrent({id:id}).then(res=>{
            console.log(res.data)
            this.currentCategory=res.data.currentCategory
        //    console.log(res.data.currentCategory)
        })
    }

    //获取分类ID分类Nav数据
    @action NavData(id){
        categoryData({id:id}).then(res=>{
            this.brotherCategory=res.data;
        })
    }
    //渲染详情列表
    @action ClickList(id){
        categoryList({categoryId:id}).then(res=>{
            this.brotherList=res.data.data;
        })
    }

    //获取商品详情
    @action shopList(id){
        console.log(id)
        shoppDetail({id:id}).then(res=>{
            this.shoppingData=res.data;
        })
    }
}