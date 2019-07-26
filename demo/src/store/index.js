// 引入模块
import Login from './modules/login.modules'
import Home from './modules/home.modules'
// 实例化模块
const login = new Login();
const home = new Home();

export default{
    login, home
}