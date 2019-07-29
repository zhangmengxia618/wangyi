import React from 'react';
import Loadable from "react-loadable"
function Loading() {
    return <div>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561611110937&di=f293a0b5d0dce485b50a03f0439cf6f8&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ffbe4ef9f8e6fd3f723f5d33559af795bb370868712aca-z8IkyD_fw658" alt="" />
    </div>
}

const Layer = Loadable({
    loader: () => import('@/views/layer/index'),
    loading: Loading
})
const Login = Loadable({
    loader: () => import('@/views/login/login'),
    loading: Loading
})
const Classify = Loadable({
    loader: () => import('../views/layer/classify/classify'),
    loading: Loading
})
const Home = Loadable({
    loader: () => import('../views/layer/home/home'),
    loading: Loading
})
const Mine = Loadable({
    loader: () => import('../views/layer/mine/mine'),
    loading: Loading
})
const ShoppingCart = Loadable({
    loader: () => import('../views/layer/shoppingCart/shoppingCart'),
    loading: Loading
})
const Special = Loadable({
    loader: () => import('../views/layer/special/special'),
    loading: Loading
})
const SpecialDetail = Loadable({
    loader: () => import('../views/layer/special/specialDetail/specialDetail'),
    loading: Loading
})

const SpecialList = Loadable({
    loader: () => import('../views/layer/special/SpecialList/SpecialList'),
    loading: Loading
})
const Comment = Loadable({
    loader: () => import('../views/layer/special/comment/comment'),
    loading: Loading
})
//奇趣分类
const Qiquclassify = Loadable({
    loader: () => import('../views/layer/classify/classDetail/classDetail'),
    loading: Loading
})
//商品购物详情
const ShoppingDetail = Loadable({
    loader: () => import('../views/layer/classify/shopDetail/shopDetail'),
    loading: Loading
})
//制造商
const Zhizaoshang = Loadable({
    loader: () => import('../views/layer/home/zhizaoshang/zhizaoshang'),
    loading: Loading
})



let router = [
    {
        path: '/',
        redirect: '/layer/home'
    },
    {
        path: "/layer",
        component: Layer,
        children: [{
            path: "/layer/home",
            component: Home,
            children: []
        },
        {
            path: "/layer/special",
            component: Special,
            children: []
        },
        {
            path: "/layer/classify",
            component: Classify,
            children: []
        },
        {
            path: "/layer/shoppingCart",
            component: ShoppingCart,
            children: []
        },
        {
            path: "/layer/mine",
            component: Mine,
            children: []
        }]
    }, {
        path: "/login",
        component: Login
    }, {
        path: "/SpecialDetail/:id",
        component: SpecialDetail
    }, {
        path: "/SpecialList/:id",
        component: SpecialList
    }, {
        path: "/Comment/:id",
        component: Comment
    }, {
        //奇趣分类
        path: "/Qiquclassify/:id",
        component: Qiquclassify
    }, {
        //奇趣分类
        path: "/shoppingDetail/:id",
        component: ShoppingDetail
    }, {
        //制造商
        path: "/zhizaoshang/:id",
        component: Zhizaoshang
    }

]


export default router;