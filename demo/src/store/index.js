// 引入模块
import Login from './modules/login.modules'
import Home from './modules/home.modules'
import Special from './modules/special.modules'
import Classify from "./modules/classify.modules"
import Collect from './modules/collect.module'
import ShoppingCart from "./modules/shoppingCart.module"
// 实例化模块
//登录
const login = new Login();
//home页数据
const home = new Home();
//专题
const special = new Special();
//收藏
const collect = new Collect()
//分类
const classify = new Classify();
//购物车
const shoppingCart=new ShoppingCart()
//登录
export default{
    home,
    login,
    //专题
    special,
    //分类
    classify,
    //收藏
    collect,
    //购物车
    shoppingCart
};
