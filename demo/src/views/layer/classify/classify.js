import React, { Component } from 'react'
import { inject ,observer} from 'mobx-react';
import styles from  './classfiy.module.scss';
//把后台抛出方法引用链接过来
@inject('classfiy')
//监听页面随时刷新。
@observer
class Classify extends Component {
   componentDidMount(){
       this.props.classfiy.changeCount()
   }
    render() {
      let data=this.props.classfiy.count
      let rightData=this.props.classfiy.count
    //   console.log(rightData)
        return (
            <div className={styles.wrapper}>
                <div className={styles.search}>
                    <input type="text" placeholder="搜索商品，共239好物" />
                </div>
                <div className={styles.main}>
                     <div className={styles.lefts}>
                         {data.map(item=><li  key={item.name}>{item.name}</li>)}
                     </div>
                     <div className={styles.rights}>
                   <div >
                       {rightData.map(item=>
                       <div className={styles.rightMain}>
                                <li><img className={styles.wapimg} src={item.wap_banner_url}/>
                                <li className={styles.front}>{item.front_desc}</li>
                                          </li>
                                          <h3 className={styles.title}>--{item.name}分类--</h3>
                                          {item.subCategoryList&&item.subCategoryList.map(ins=>
                                          <div className={styles.ImgList}>
                                               <dl>
                                                    <dt><img className={styles.Listone} src={ins.wap_banner_url}/></dt>
                                                    <dd>{ins.name}</dd>
                                                </dl>
                                          </div>
                                               
                                            )}
                                         
                            </div>
                 )}
                   </div>
                     </div>
                </div>
                <div className={styles.footer}>
                        {/* <Footer></Footer> */}
                        </div>
                </div>
        )
    }
}

export default Classify




