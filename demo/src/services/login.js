import request from '../utils/request'

//用户登录
export function logins(params) {
    console.log(params)
  return request.post('/auth/loginByMobile', params);
}
