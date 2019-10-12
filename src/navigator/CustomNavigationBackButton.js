/**
 * Created by fujinliang on 2018/7/28
 */
import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {backButtonWidth, headerHeight} from '../assets/styles/index'

class CustomNavigationBackButton extends Component {
  render () {
    const {goBack} = this.props

    const Wrap = goBack ? TouchableOpacity : View

    return (
      <Wrap
        style={{
          height: headerHeight,
          width: backButtonWidth,
          justifyContent: 'center'
        }}
        onPress={() => {
          typeof goBack === 'function' && goBack()
        }}
      >
        <Text style={{
          height: 30,
          widget: 30,
          backgroundColor: '#ccc'
        }}>返回</Text>
        />
      </Wrap>
    )
  }
}

export default CustomNavigationBackButton
