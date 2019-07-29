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