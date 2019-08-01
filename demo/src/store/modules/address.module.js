import { observable, action } from "mobx";
import { getuseraddress, saveaddress, deleteaddress } from '@/services'

export default class Address {


  @observable addressList = [];


  //渲染初始数据
  @action getAddress() {
    getuseraddress().then(res => {
      this.addressList = res.data;
    })
  }

  //收藏页数据
  @action saveAddress = async (params) => {
    const data = await saveaddress(params)
    
  }

  //收藏页数据
  @action delAddress = async (params) => {
    const data = await deleteaddress(params)
  }


}

