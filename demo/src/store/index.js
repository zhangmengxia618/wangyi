// 引入模块
import Login from './modules/login.modules'
import Home from './modules/home.modules'
import Special from './modules/special.modules'
// 实例化模块
//登录
const login = new Login();
//home页数据
const home = new Home();
//专题
const special = new Special();

export default {
    login, home, special
}
