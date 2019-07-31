import { observable, action } from "mobx";
import { collectList, addorDelete } from '@/services/collect'

export default class Collect {
  @observable collectData = [];
  @observable deteleData = '';


  //收藏页数据
  @action getCollectData(params) {
    console.log(params)
    collectList(params).then(res => {
      this.collectData = res.data
    })
  }

   //收藏页数据
   @action DeleteData(params) {
    console.log(params)
    addorDelete(params).then(res => {
      alert(res.data.type)
      this.getCollectData()
      // this.collectData = res.data
    })
  }



}