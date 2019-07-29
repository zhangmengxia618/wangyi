import request  from '@/utils/request'
// console.log(request)
export function home(){
  return request.get('/')
}


//获取分类ID分类Nav数据
// export function qiqu(params){
//   return request.get('/goods/category',{params})
// }


//获取制造商数据
export function zhizaoshang(params){
  return request.get('/brand/detail',{params})
}

//根据制造商id获取制造商商品列表
export function branddata(params) {
  return request.get('/goods/list', { params })
}