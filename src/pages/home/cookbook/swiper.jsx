import React, { Component } from 'react'
import {Carousel} from "antd-mobile"

// 1引用 connect是一个函数所以在最下面改造
import { connect } from 'react-redux' 
import {SwiperWrap} from "./styledCookbook"


import { GETLIST } from '../action-types'
import {list} from '../../../mock/mock.js'

const mapState = state => ({
    list: state.home.list
  })


  const mapDispatch = dispatch => ({
    loadData() {
      dispatch({
        type: GETLIST,
        url: list
      })
    }
  })
  // 使用装饰来来装在上面两个方法
  @connect(mapState,mapDispatch)
 class Swiper extends Component {
  componentDidMount() {
    this.props.loadData()
  }
    render() {
        return (
            <SwiperWrap>
                {this.props.list&&(
                    <Carousel
                    autoplay={true}
                    infinite
                  >
                      {/* <img src={swiper}/> */}
                      {/* 5.便利 因为props.list是空数据会没有东西  先看看报错吗*/}
                      {
                         this.props.list.splice(0,5).map((value) => <img key={value.id} src={value.img} alt=""/>)
                   
                      }
                      </Carousel>
                )}
            </SwiperWrap> 
        )
    }
}
// 3暴扣 connect(mapState稍后定义 )是一个高阶组件所以传入swiper
export default Swiper