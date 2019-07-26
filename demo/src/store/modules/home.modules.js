import { observable, action } from "mobx";
import { home } from '@/services/home'

export default class Home {
  //  @observable 修饰属性
  @observable data={};

  // constructor() {
  //   this.data = {}
  // }

  // @action 修饰方法
  @action getHomeData = async () => {
    const data = await home()
    this.data = data.data.data
    console.log(data.data.data)
  }
  // getHomeData() {
  // home().then((res) => {
  //   console.log(res.data.data)
  //   this.data=res.data.data
  // })
  // }
}