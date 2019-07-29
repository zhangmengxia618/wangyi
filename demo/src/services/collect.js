import request from '@/utils/request'


//收藏页面
export function collectList(params) {
  return request.get('/collect/list', { params })
}