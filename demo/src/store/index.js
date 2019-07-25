// 引入模块
import Login from './modules/login.modules'
import Special from './modules/special.modules'
// 实例化模块
//登录
const login = new Login();
//专题
const special = new Special();
//登录
export default{
    login,
    //专题
    special
};
