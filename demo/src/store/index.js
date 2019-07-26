// 引入模块
import Login from './modules/login.modules'
// import Special from './modules/login.modules'
import Classfiy from './modules/classfiy.module'
// 实例化模块
const login = new Login();
// const special= new Special();
const classfiy=new Classfiy()
export default{
    login,
    // special,
    classfiy
}


