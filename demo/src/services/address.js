import request from '@/utils/request'


//获取用户地址数据
export function getuseraddress() {
  return request.get('/address/list')
}

//新增地址
export function saveaddress(params){
  return request.post('/address/save',params)
}

//删除地址
export function deleteaddress(params){
return request.post('/address/delete', params)
}
