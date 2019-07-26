import axios from "axios";

const service=axios.create({
  baseURL:"http://123.206.55.50:8888/",
//   baseURL:"https://exam.jasonandjay.com",
  // baseURL: /jasonandjay.com/.test(window.location.host) ? "https://exam.jasonandjay.com" : 'http://127.0.0.1:7001/',
  timeout:5000
})
// /,

// service.interceptors.request.use(
//   config=>{
//     if(getCookie()){
//       config.headers['authorization']=getCookie() 
//     }
//     return config
//   },
//   error=>{
//     return Promise.reject(error)
//   }
// )

// service.interceptors.response.use(
//   response=>response.data,
//   error=>{
//     return Promise.reject(error)
//   }
// )

export default service