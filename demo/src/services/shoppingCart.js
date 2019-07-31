import request from '../utils/request'

//获取用户购物车数据
export function cartIndex(params) {
  return request.get('/cart/index', {params});
}
//购物车商品是否选中
export function cartChecked(params) {
  return request.post('/cart/checked', params);
}

// 删除购物车商品
export function cartDelete(params) {
  return request.post('/cart/delete', params);
}



