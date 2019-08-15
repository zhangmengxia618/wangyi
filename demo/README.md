# EasyMarket [易购](https://github.com/Peroluo/easyMarketApp)

> ​EasyMarket 是仿网易严选 UI 设计的 H5 webApp。项目是基于 React+Redux+mobx+Axios+React-router。
> ​EasyMarket 采用阿里 antd-design-mobile 的 UI 组件。



## EasyMarket Screenshots

|         首页         |        制造商         |         商品分类         |         收藏商品         |
| :------------------: | :-------------------: | :----------------------: | :----------------------: |
| ![](./imgs/home.png) | ![](./imgs/brand.png) | ![](./imgs/category.png) | ![](./imgs/likeList.png) |
 首页的很多详情与分类的一样所以只需要写一成组件就可以 后台会根据传参来渲染不同的内容
|         专题          |          专题详情           |            分类检索            |          商品查询           |
| :-------------------: | :-------------------------: | :----------------------------: | :-------------------------: |
| ![](./imgs/topic.png) | ![](./imgs/topicDetail.png) | ![](./imgs/categorySearch.png) | ![](./imgs/goodsSearch.png) |
 
  
|        购物车        |          商品详情           |        更多评论         |         我的         |
| :------------------: | :-------------------------: | :---------------------: | :------------------: |
| ![](./imgs/cart.png) | ![](./imgs/goodsDetail.png) | ![](./imgs/comment.png) | ![](./imgs/mine.png) |

## EasyMarket Preview

<figure class="third">
    <img src="./imgs/EasyMarket.gif" width="320"/>
</figure>

## EasyMrket  计算rem
    <script>

        // 计算rem
        var fun = function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
                //这里是假设在750px宽度设计稿的情况下，1rem = 100px；
                //可以根据实际需要修改
                docEl.style.fontSize = (clientWidth / 750) * 200 + 'px';
            };
            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        }
        fun(document, window);
        
        </script>

## EasyMrket 本地部署

> 1. git clone git@github.com:zhangmengxia618/wangyi.git
> 2. 安装依赖 cnpm install
> 3. 修改 package.json 文件中 proxy 字段的值 = 你本地服务器的 ip 地址 （"proxy": "http://127.0.0.1:8888"）
> 4. npm start

## EasyMarket 目前未完成功能

> - 登录功能需要完善

> - 购物车

> - 模糊搜索

> - 我的

> - 内容按需加载

##  图片懒加载
> - import ProgressiveImage from 'react-progressive-image'

     <ProgressiveImage src={item.pic_url}  placeholder="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg">
        {src => <img src={src} alt="an image" />}
     </ProgressiveImage>

## 图片懒加载加动画  [link](https://juejin.im/entry/5aa256d6518825557207f9b8)

        // 引入 lazyimg
        import { withLazyimg } from 'react-lazyimg-component';
        // 引入 volecity.js
        import 'velocity-animate';
        import 'velocity-animate/velocity.ui';
        
     // 配置（在render 中）
        const config = {
            placeholder: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1564625027&di=57a3d087b1f5ae7340722751e915abd7&src=http://hbimg.b0.upaiyun.com/2803b55a526758deaeb9409eb36207df3126376c660c-TwELia_fw658',
            js_effect: 'transition.shrinkIn', // 支持 velocity.js 动画效果
            appear: null, // 元素出现在可视窗口时触发appear钩子函数
            threshold: 1000, // 指定触发阈值
        };
        const Lazy = withLazyimg(config);
        //替换原先的照片
         <Lazy
            className="lazy"
            src={item.icon_url}   
            />

  ## End

> - 会努力做到更好

## About Me

> Name: 一月不站小分队
>
>
> Email：18534139580@163.com
