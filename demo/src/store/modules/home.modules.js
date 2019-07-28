import { observable, action } from "mobx";
import { home, qiqu, qiqucon } from '@/services/index'



export default class Home {
  //  @observable 修饰属性
  @observable data={};//主页的数据
  @observable qiqudata = {}; //奇趣数据
  // constructor() {
  //   this.data = {}
  // }

  // @action 修饰方法
  @action getHomeData = async () => {
    const data = await home()
    this.data = data.data
    // console.log(data.data,1)
  }

  @action getQiquData = async (id) => {
    const data = await qiqu({id:id})
    this.qiqudata = data.data
    console.log(data.data)
  }












  // getHomeData() {
  // home().then((res) => {
  //   console.log(res.data.data)
  //   this.data=res.data.data
  // })
  // }
}