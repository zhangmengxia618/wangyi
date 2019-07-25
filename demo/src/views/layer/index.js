import React, { Component } from 'react'
import Footer from "../component/footer"
import RouterView from "../../router/routerView";
console.log(RouterView)
export class index extends Component {
    render() {
        return (
            <div>
                <RouterView router={this.props.child}></RouterView>
                <Footer></Footer>
            </div>
        )
    }
}

export default index
