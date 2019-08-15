import { observable, action } from "mobx";
import { home, zhizaoshang, branddata } from '@/services/index'


export default class Home {
  //  @ 修饰属性
  @observable data = {};//主页的数据
  @observable zhizaodata = {};
  @observable branddata = {};


  //首页数据
  @action getHomeData = async () => {
    const data = await home()
    this.data = data.data;
  }


  //制造商页面数据
  @action getZhizaoshangData = async (id) => {
    const data = await zhizaoshang({ id: id })
    this.zhizaodata = data.data;
  }

  //制造商商品列表
  @action getbrandData = async (params) => {
    const data = await branddata(params)
    this.branddata = data.data
  }

}