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
  return request.get('/comment/list', {params});
}

//是否添加到收藏栏
export function addorDelete(params) {
  return request.post('/collect/addordelete', params);
}

//模糊搜索（获取商品查询的相关信息）
export function searchIndex(params) {
  console.log(params)
  return request.get('/search/index', {params});
}

//商品查询模糊查询关键字
export function searchHelper(params) {
  console.log(params)
  return request.get('/search/helper', {params});
}



//模糊搜索相对应列表
export function searchList(params) {
  return request.get('/goods/list', {params});
}

//

//删除商品查询的历史记录
export function clearHistory(params) {
  return request.get('/search/clearhistory', {params});
}

//添加到购物车
export function addCart(params) {
  return request.post('/cart/add', params);
}

//获取用户购物车商品数量
export function goodsCount(params) {
  return request.get('/cart/goodscount', {params});
}







