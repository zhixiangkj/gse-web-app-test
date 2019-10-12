/**
 * Created by liulei on 2018/7/30
 */
import {StatusBar} from 'react-native'
import {isIphoneX} from 'react-native-iphone-x-helper'
import { px2dp } from '../../utils/demensions'

export const headerHeight = 44
export const statusBarHeight = StatusBar.currentHeight || (isIphoneX() ? 44 : 20)
export const backButtonWidth = 55
export const defaultMargin = px2dp(10)
export const defaultPadding = px2dp(15)
export const authScreenPadding = px2dp(25)
export const homeTotalAssetHeight = 180
