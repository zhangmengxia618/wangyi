// import React, { Component } from 'react'
// import { inject, observer } from 'mobx-react'
// import style from "./compile.module.scss"
// @inject('shoppingCart')
// @observer
// class Compile extends Component {
//     render() {
//         let cartData = this.props.shoppingCart.cartData;
//         console.log()
//         return (
//             <div>
//                 <ul className={style.ul}>
//                     {
//                         cartData && cartData.map((item, index) => {
//                             return (
//                                 <li className={style.li} key={index + "shop"}>
//                                     <div className={style.checkbox}><input type="checkbox" checked={this.props.checks} onClick={() => { this.da(cartData) }} /></div>
//                                     <div className={style.imgbox}>< img src={item.list_pic_url} alt="" /></div>
//                                     <div className={style.goodsinfo}>
//                                         <p>{item.goods_name}</p>
//                                         <p>{item.goods_specifition_name_value}</p>
//                                         <p className={style.price}>￥{item.retail_price}</p>
//                                     </div>
//                                     <div className={style.goodsnum}>X{item.number}</div>
//                                 </li>


//                                 <li className={style.li}>
//                                     <div className={style.ischeck}>
//                                         <input type="checkbox" />
//                                     </div>
//                                     <div className={style.imgbox}>
//                                         <img src="http://yanxuan.nosdn.127.net/6ad1813d123f7a80f84c2cfa5f8c7caf.png" alt="" />
//                                     </div>
//                                     <div className={style.info}>
//                                         <p>已选择:</p>
//                                         <p className={style.price}>￥47</p>
//                                     </div>
//                                     <div className={style.choosenum}>
//                                         <div className={style.reduce}>—</div>
//                                         <div className={style.num}>4</div>
//                                         <div className={style.add}>+</div>
//                                     </div>
//                                 </li>

//                               )
//                         })
//                     }

//                 </ul>
//             </div>
//         )
//     }

//     componentDidMount() {
//         this.props.shoppingCart.searchHelper()
//     }

//     da(cartData) {
//         cartData.every(function (e) {

//             return e.checked;
//         })
//     }
// }

// export default Compile
