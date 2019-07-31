import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import style from './shopping.module.scss'
import Compile from "./compile/compile"
@inject('shoppingCart')
@observer
class ShoppingCart extends Component {
    state = {
        checked: false,
        isEdit: false,
    }
    render() {
        let cartData = this.props.shoppingCart.cartData;
        let cartV = this.props.shoppingCart.cartV;
        let { isEdit } = this.state;
        const hasEdit = cartData.filter((item) => {
            return item.isHasEdit
        })
        return (
            <div className={style.con}>
                <header className={style.header}>
                    <p><span className={style.star}>★</span> 30天无忧退货</p>
                    <p><span className={style.star}>★</span> 48小时快速退货</p>
                    <p><span className={style.star}>★</span> 满88元免邮费</p>
                </header>
                <section className={style.section}>
                    <ul className={style.ul}>
                        {
                            cartData && cartData.map((item, index) => {
                                return (
                                    <li className={style.li} key={index + "shop"}>
                                        <div className={style.checkbox}>
                                            {}
                                            {!isEdit ?
                                                <input type="checkbox" checked={this.props.shoppingCart.FinishIsChecked} onClick={() => { this.changeChecked(item) }} /> :
                                                <input type="checkbox" checked={this.props.shoppingCart.careEnit} onClick={() => { this.props.shoppingCart.changeEditItemChecked(item) }} />}
                                        </div>
                                        <a href={`/shoppingDetail/${item.goods_id}`}>
                                            <div className={style.imgbox}>< img src={item.list_pic_url} alt="" /></div>
                                        </a>
                                        {
                                            !isEdit ? (<Fragment>
                                                <div className={style.goodsinfo}>
                                                    <p>{item.goods_name}</p>
                                                    <p>{item.goods_specifition_name_value}</p>
                                                    <p className={style.price}>￥{item.retail_price}</p>
                                                </div>
                                                <div className={style.goodsnum}>X{item.number}</div>
                                            </Fragment>
                                            ) : (
                                                    <Fragment>
                                                        <div className={style.info}>
                                                            <p>已选择:</p>
                                                            <p className={style.price}>￥{item.retail_price}</p>
                                                        </div>
                                                        <div className={style.choosenum}>
                                                            <div className={style.reduce} onClick={this.addOrDelete.bind(this, item, -1, cartData)}>—</div>
                                                            <div className={style.num}>{item.number}</div>
                                                            <div className={style.add} onClick={this.addOrDelete.bind(this, item, 1, cartData)}>+</div>
                                                        </div>
                                                    </Fragment>)
                                        }
                                    </li>
                                )
                            })
                        }

                    </ul>
                    {

                    }
                </section>
                {
                    cartData.length ? (!isEdit ? <footer className={style.footer}>
                        <div className={style.allchoose}>
                            {!isEdit ?
                                <input type="checkbox" checked={this.props.shoppingCart.FinishIsChecked} onClick={() => { this.props.shoppingCart.cartCheckedD() }} />
                                : <input type="checkbox" checked={this.props.shoppingCart.careEnit} onClick={() => { this.props.shoppingCart.careEnitD() }} />}
                        </div>
                        <div className={style.info}><span>已选({cartV && cartV.checkedGoodsCount})</span> <span> ￥{cartV && cartV.checkedGoodsAmount}</span></div>
                        <div className={style.edit} onClick={() => { this.changeEdit(this.state.isEdit, cartData) }}>编辑</div>
                        <div className={style.order}>下单</div>
                    </footer> : <footer className={style.footer}>
                            <div className={style.allchoose}>
                                {!isEdit ?
                                    <input type="checkbox" checked={this.props.shoppingCart.FinishIsChecked} onClick={() => { this.props.shoppingCart.cartCheckedD() }} /> :
                                    <input type="checkbox" checked={this.props.shoppingCart.careEnit} onClick={() => { this.props.shoppingCart.careEnitD() }} />}
                            </div>
                            {console.log(this.props.shoppingCart.EditCheckedCount)}
                            <div className={style.info}><span>已选({this.props.shoppingCart.EditCheckedCount})</span></div>
                            <div className={style.edit} onClick={() => { this.changeEdit(this.state.isEdit, cartData) }}>完成</div>
                            <div className={style.order} onClick={() => { this.deteleBtn(cartData) }}>删除所选</div>
                        </footer>) : (
                            <Fragment>
                                <div className="noGoods">去添加点什么吧~</div>
                            </Fragment>
                        )
                }
            </div>
        )
    }
    componentDidMount() {
        this.props.shoppingCart.searchHelper()
        this.props.shoppingCart.changeInitFinishCheckedFn()
        this.props.shoppingCart.addCartD()
    }
    /*购物车商品编辑状态*/
    changeEdit(status, cartData) {
        cartData.forEach((item) => {
            item.isHasEdit = false
        })
        this.setState({
            isEdit: !status,
            cartData
        })
    }
    //购物车加减
    addOrDelete(item, type, cartData) {
        const { goods_id, id, number, product_id } = item;
        this.props.shoppingCart.addCartD({ goodsId: goods_id, number: type, productId: product_id })
    }
    //完成页面反选
    changeChecked(item) {
        let checked = item.checked === 0 ? 1 : 0;
        this.props.shoppingCart.cartCheckedFn(checked, item.product_id)
        this.props.shoppingCart.FinishIsChecked = true;
    }

    //点击删除
    deteleBtn(data) {
        this.props.shoppingCart.goodsCountD()
        // if(this.props.shoppingCart.FinishIsChecked===false){
        //     data.forEach(item=>{
        //         console.log(item.product_id)
        //     })
        // }
        // console.log(this.state.productIds)
        // const productIds=[]
        // data.forEach(item=>{
        //     if(this.state.isEdit){
        //         console.log(123)
        //         productIds.push(item.product_id)
        //     }
        // })
    }


}

export default ShoppingCart
