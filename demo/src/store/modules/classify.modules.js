import { observable, action } from "mobx";
import {
    classCurrent,catalogCurrent,categoryData,categoryList,shoppDetail,
    shoppRelated,commentList,addorDelete,searchIndex,searchHelper,searchList,clearHistory,addCart,goodsCount
} from "../../services"
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
    // 相关商品
    @observable shoppRelatedData = [];
    // 相关商品评论详情
    @observable commentListData = [];
    
    // 购物车初始
    @observable count = 0;
    //收藏
    @observable addorShow = false;
    //模糊搜索初始渲染（热门）
    @observable hotKeywordList = [];
    //历史
    @observable historyKeywordList = [];
    //input 默认值
    @observable defaultKeyword = [];

    //input 初始值
    @observable Keyword = ''

    //input 模糊搜索结果
    @observable KeywordData =[];

     //input 模糊搜索相对应列表
     @observable searchListData =[];
    // 添加成功返回值
    @observable careValue =-1;
     //input 添加成功后的值
     @observable careOKValue ='';
    
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

    //相关商品
    @action related(id){
        console.log(id)
        shoppRelated({id:id}).then(res=>{
            console.log(res.data)
            this.shoppRelatedData=res.data.goodsList;
        })
    }

     //相关商品评论详情
     @action commentL(id){
        console.log(id)
        commentList({valueId:id,typeId:0}).then(res=>{
            this.commentListData=res.data.data;
        })
    }

    @action changeCount(type){
        type==="+"?this.count++:this.count--;
    }
    //是否添加到收藏
    @action addorD(id){
        addorDelete({typeId:id,valueId:0}).then(res=>{
            this.addorShow=res.data.type==="add"?true:false;
        })
    }
       //模糊搜索初始渲染
    @action searchIndexData(){
        searchIndex().then(res=>{
            this.hotKeywordList=res.data.hotKeywordList;
            this.historyKeywordList=res.data.historyKeywordList;
            this.defaultKeyword=res.data.defaultKeyword;
        })
    }

    //商品查询模糊查询关键字
    @action searchHelper(value){
        this.Keyword=value;
        searchHelper({keyword:value}).then(res=>{
            this.KeywordData=res.data;
        })
    }
    
    //模糊搜索相对应列表
    @action searchListD(value){
        console.log(value)
        searchList(value).then(res=>{
            this.searchListData=res.data.data;
        })
    }
    //删除商品查询的历史记录
    @action clearHistoryD(){
        clearHistory().then(res=>{
            console.log(res)
            // this.searchListData=res.data;
        })
    }

    //添加到购物车
    @action addCartD(value){
        console.log(value)
        addCart(value).then(res=>{
            console.log(res)
            this.careValue=res.errno;
        })
    }

      //获取用户购物车商品数量
      @action goodsCountD(){
        goodsCount().then(res=>{
            this.careOKValue=res.data.cartTotal.goodsCount;
        })
    }

    

    
}