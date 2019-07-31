import request from '@/utils/request'

//收藏页面
export function collectList(params) {
  return request.get('/collect/list', { params })
}

//收藏页面删除
export function addorDelete(params) {
  return request.post('/collect/addordelete', params)
}


