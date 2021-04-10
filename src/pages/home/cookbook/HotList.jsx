import React, { Component } from 'react'
import { HotListWrap } from "./styledCookbook"
// 引用
import { connect } from "react-redux";

// 设置装饰器使用数据
@connect((state)=>({
    hotlist:state.home.list
}))
 class HotList extends Component {
    render() {
        return (
            <HotListWrap>
                <h1>精品好菜</h1>
                    <div>
                    {this.props.hotlist.splice(0,20).map(value=>(
                        <figure key={value.id}>
                        <img src={value.img} alt=""/>
                        <figcaption>
                            <h3>{value.name}</h3>
                            <h5>{value.all_click}</h5>
                        </figcaption>
                    </figure>
                    ))
                    }
                    </div>
            </HotListWrap> )
    }}
export default HotList