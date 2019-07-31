import { observable, action } from "mobx";
import { cartIndex, cartChecked, addCart, goodsCount, cartDelete,collectList } from '@/services/index'

export default class Home {
    //  @observable 修饰属性
    @observable cartData = [];//主页的数据
    @observable cartV = '';
    //选中的初始状态
    @observable FinishIsChecked = '';
    //   // 添加成功返回值
    //   @observable careValue =-1;
    // 是否全部编辑
    @observable careEnit = false;
    @observable EditCheckedCount = '';

    @observable deleteData = [];

    //商品查询模糊查询关键字
    @action searchHelper() {
        cartIndex().then(res => {
            this.cartData = res.data.cartList;
            res.data.cartList.forEach((item, index) => {
                item.IsEnit = false;
            })
        })
    }
    //全选 反选
    @action async changeInitFinishCheckedFn() {
        let data = await this.searchHelper();
        let flag = this.cartData && this.cartData.every((item, index) => {
            return item.checked
        })
        this.FinishIsChecked = !flag;

    }

    @action cartCheckedFn(isChecked, productIds) {
        console.log(isChecked, productIds)
        cartChecked({
            isChecked: isChecked,
            productIds: productIds
        }).then(res => {
            console.log(res)
            this.cartV = res.data.cartTotal
            this.cartData = res.data.cartList;
            this.searchHelper()
        })

    }

    //购物车商品是否选中
    @action cartCheckedD() {
        console.log(this.cartData);
        this.FinishIsChecked = !this.FinishIsChecked;
        let arr = this.cartData.map((item, index) => {
            return item.product_id;
        })
        let productIdsData = arr.join();
        if (this.FinishIsChecked) {

            this.cartCheckedFn(1, productIdsData)
        } else {

            this.cartCheckedFn(0, productIdsData)
        }

    }

    //购物车商品是否选中
    @action careEnitD() {
        this.careEnit = !this.careEnit;
        let arr = this.cartData.map((item, index) => {
            return item.product_id;
        })
        this.EditCheckedCount = arr.length;
        let productIdsData = arr.join();
        if (this.FinishIsChecked) {
            this.cartCheckedFn(1, productIdsData)
        } else {
            this.cartCheckedFn(0, productIdsData)
        }

    }

    //添加到购物车
    @action addCartD(value) {
        console.log(value)
        addCart(value).then(res => {
            console.log(res)
            this.searchHelper()
            this.careValue = res.errno;
        })
    }

    //获取用户购物车商品数量
    @action goodsCountD() {
        goodsCount().then(res => {
            this.careOKValue = res.data.cartTotal.goodsCount;
        })
    }

    //切换编辑页面每一项的全选和反选功能
    @action changeEditItemChecked(data) {
        let newData = this.cartData.map((item, index) => {
            console.log(data.product_id)
            if (item.product_id === data.product_id) {
                item.flag = !item.flag;
                this.FinishIsChecked = !item.flag;
                this.deleteData.push(data.product_id);
            }

            return item;
        })


        //编辑页面的全选按钮的状态
        this.careEnit = newData.every((item, index) => {
            return item.flag;
        })
        //编辑页面数据的选中的状态
        this.cartData = newData;

        //编辑页面的数量
        let newDataCount = newData.filter((item, index) => {
            return item.flag;
        })

        this.EditCheckedCount = newDataCount.length;

    }


    //获取用户购物车商品数量
    @action goodsCountD() {
        let deleteDataId = this.deleteData.join();
        console.log(deleteDataId)
        cartDelete({ productIds: deleteDataId }).then(res => {
            this.cartV = res.data.cartTotal
            this.cartData = res.data.cartList;
            // this.careOKValue=res.data.cartTotal.goodsCount;
        })
    }



}