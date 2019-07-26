import request from '../untils/request'

//分类页初始化信息获取
export function Classfiy(){
    return request.get("/catalog/index")
}


