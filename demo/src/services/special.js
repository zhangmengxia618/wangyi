import request from '../utils/request'
import {inject,observer} from "mobx-react"
//专题
export function special(params) {
  return request.get('/topic/list', params);
}
