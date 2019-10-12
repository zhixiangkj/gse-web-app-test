/**
 * Created by fjl on 2018/11/6
 */
import React, { Component } from 'react'
import { WebView, StyleSheet } from 'react-native'
class SettingScreen extends Component {
  static navigationOptions = {
    header: null
  }
  constructor (props) {
    const {url} = props.navigation.state.params
    super(props)
    this.state = {
      url
    }
  }
  render () {
    // const uri = 'https://dapp.gsenetwork.co/'
    return (
      <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        bounces={true}
        decelerationRate='normal'
        ref="webView"
        // scrollEnabled={true}
        // injectedJavaScript={''}
        // onLoadStart={this.onLoadStart}
        // onLoadEnd={this.onLoadEnd}
        // onLoad={this.onLoad}
        // onNavigationStateChange={this.handleNavigationStateChange}
        // onMessage={this.handleMessage}
        // scalesPageToFit={Platform.OS === 'android'}
        style={styles.webView}
        source={{uri: this.state.url}}
      />
    )
  }
}

const styles = StyleSheet.create({
  webView: {
    flex: 1
  }
})

export default SettingScreen
