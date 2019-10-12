/**
 * Created by fjl on 2018/7/25
 */
import React from 'react'
import { Platform } from 'react-native'
import {
  authPageBackgroundColor,
  defaultPadding,
  headerBackgroundColor,
  l1FontSize,
  pageBackgroundColor,
  headerHeight
} from '../assets/styles'
// import CustomNavigationBackButton from './CustomNavigationBackButton'
// 导航头设置
const navigationOptions = ({navigation}, isAuth) => {
  const headerStyle = isAuth ? {
    borderWidth: 0,
    borderBottomWidth: 0,
    elevation: 0
  } : {}
  return {
    headerStyle: {
      marginTop: (isAuth && Platform.OS !== 'ios') ? -defaultPadding : 0,
      marginHorizontal: (isAuth && Platform.OS !== 'ios') ? -defaultPadding : 0,
      marginBottom: (isAuth && Platform.OS !== 'ios') ? defaultPadding : 0,
      height: headerHeight,
      backgroundColor: headerBackgroundColor,
      ...headerStyle
    },
    headerTitleStyle: {
      textAlign: 'center',
      fontSize: l1FontSize
    },
    // headerBackImage: <CustomNavigationBackButton navigation={navigation} />,
    headerBackTitle: null
  }
}

// 导航动画设置
const transitionConfig = Platform.OS === 'android' ? () => ({
  screenInterpolator: CardStackStyleInterpolator.forHorizontal
}) : null

export default (isAuth) => ({
  navigationOptions: (options) => navigationOptions(options, isAuth), // 导航头设置
  transitionConfig, // 导航动画设置
  headerLayoutPreset: 'center', // 安卓title居中
  cardStyle: { // 栈导航的页面背景颜色
    backgroundColor: isAuth ? authPageBackgroundColor : pageBackgroundColor
  }
})
