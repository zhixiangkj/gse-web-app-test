/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import StackNavigator from './navigator/StackNavigator'
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <StackNavigator />
    );
  }
}

