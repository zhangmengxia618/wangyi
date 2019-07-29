import request from '../utils/request'
//分类页初始化信息获取
export function classCurrent() {
  return request.get('/catalog/index');
}
//   * 根据分类ID获取当前分类信息和子分类
export function catalogCurrent(params) {
  return request.get('/catalog/current',{params});
}


// 获取分类ID分类Nav数据
export function categoryData(params) {
  return request.get('/goods/category', {params});
}

// 根据分类Id或者制造商Id获取商品
export function categoryList(params) {
  return request.get('/goods/list', {params});
}
// 获取商品详情
export function shoppDetail(params) {
  return request.get('/goods/detail', {params});
}

// 相关商品
export function shoppRelated(params) {
  return request.get('/goods/related', {params});
}

// 相关商品评论
export function commentList(params) {
  console.log(params)
  return request.get('/comment/list', {params});
}











