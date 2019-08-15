import { observable, action } from "mobx";
import { collectList, addorDelete } from '@/services/collect'

export default class Collect {
  @observable collectData = [];
  @observable deteleData = '';


  //收藏页数据
  @action getCollectData(params) {
    collectList(params).then(res => {
      this.collectData = res.data
    })
  }

   //收藏页数据
   @action DeleteData(params) {
    addorDelete(params).then(res => {
      this.getCollectData({typeId:0})
      // this.collectData = res.data
    })
  }



}