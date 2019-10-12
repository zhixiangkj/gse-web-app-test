/**
 * Created by fjl on 2018/11/6
 */
import stackNavigatorConfig from './stackNavigatorConfig'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import SettingScreen from '../screens/SettingScreen'

export const HOME_SCREEN = 'HOME_SCREEN'
export const SETTING_SCREEN = 'SETTING_SCREEN'
export default createStackNavigator({
  [HOME_SCREEN]: {
    screen: HomeScreen
  },
  [SETTING_SCREEN]: {
    screen: SettingScreen
  }
}, stackNavigatorConfig())
