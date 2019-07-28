import request  from '@/utils/request'
// console.log(request)
export function home(){
  return request.get('/')
}


//获取分类ID分类Nav数据
export function qiqu(params){
  return request.get('/goods/category',{params})
}
