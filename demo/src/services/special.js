import request from '../utils/request'
//专题
export function special(params) {
  return request.get('/topic/list', params);
}

//专题详情
export function specialDetail(params) {
  return request.get('/topic/detail', {params});
}

//根据专题ID或者商品ID获取评论获取相关专题
export function specialList(params) {
  return request.get('/comment/list', {params});
}

//根据专题Id获取相关专题
export function specialRelated(params) {
  console.log(params)
  return request.get('/topic/related', {params});
}
//对用户进行评论
export function specialPost(params) {
  console.log(params)
  return request.post('/comment/post', params);
}



