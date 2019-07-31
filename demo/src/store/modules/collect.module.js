import { observable, action } from "mobx";
import { collectList} from '@/services/collect'

export default class Collect {
  @observable collectList = [];


  //收藏页数据
  @action getCollectData = async (params) => {
    const data = await collectList(params)
    this.collectList = data.data
    console.log(data)
  }
}