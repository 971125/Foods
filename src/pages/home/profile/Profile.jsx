import React, { Component } from 'react'
import {Switch} from "antd-mobile"
import {connect} from "react-redux"
import {SETSHOW} from "../action-types"
@connect(state=>({
    checked:state.home.isShow
}),dispatch=>({
    changeStatus(checked){
        dispatch({
                type:SETSHOW,
                data:checked
        })
    }
})
)
 class Profile extends Component {
   
    render() {
        return (
            <div>
              是否显示地图:<Switch
                    checked={this.props.checked}
                    onChange={
                        checked=>{
                            this.props.changeStatus(checked)
                        }
                    }
                />
            </div>
        )
    }
}
export default Profile