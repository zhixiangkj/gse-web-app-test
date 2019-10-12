/**
 * Created by fjl on 2018/11/6
 */
import React, { Component } from 'react'
import { View, Alert, Button, TouchableOpacity, AsyncStorage, Modal, Text, TextInput, StyleSheet } from 'react-native'
import {SETTING_SCREEN} from '../navigator/StackNavigator'
let _this = this
class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerRight: <Button
      title={'添加'}
      onPress={() => {
        _this.addWebsit()
      }}/>
  }
  constructor (props) {
    super(props)

    this.state = {
      websits: [],
      modalVisible: false,
      url: 'https://dapp.gsenetwork.co/',
      title: ''
    }
    _this = this
  }
  render () {
    return (
      <View>
        {
          this.state.websits.map(({url, title}, index) => {
            console.log(url, title, index)
            return <TouchableOpacity
              key={String(index)}
              style={styles.url_button}
              onPress={
                () => {
                  this.props.navigation.navigate(SETTING_SCREEN, {url})
                }}
              onLongPress={() => {
                Alert.alert(
                  '提示',
                  '确定删除该测试链接',
                  [
                    {
                      text: '取消',
                      onPress: () => {
                        console.log('点击取消')
                      }},
                    {
                      text: '确定',
                      onPress: () => {
                        this.state.websits.splice(index, 1)
                        this.setState({
                          websits: this.state.websits
                        })
                        AsyncStorage.setItem('websits', JSON.stringify(this.state.websits))
                      }},
                  ]
                )
              }}
            >
              <Text style={styles.url_button_text}>{title}</Text>
            </TouchableOpacity>
          })
        }
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            console.log(1111)
          }}>
          <View style={styles.modal}>
            <View style={styles.container}>
              <Text style={styles.text}>添加一个测试网址</Text>
              <TextInput
                defaultValue={this.state.title}
                onChangeText={(title) => {
                  this.setState({title})
                }}
                placeholder={'标题'}
                style={styles.input}/>
              <TextInput
                defaultValue={this.state.url}
                onChangeText={(url) => {
                  this.setState({url})
                }}
                placeholder={'网址'}
                style={styles.input}/>
              <View style={styles.buttons}>
                <Button
                  onPress={() => {
                    this.setState({modalVisible: false})
                  }}
                  title={'取消'}
                />
                <Button
                  onPress={async () => {
                    let {url, title} = this.state
                    if (!url) {
                      Alert.alert('请输入网址')
                    }
                    title = title || url
                    this.state.websits.push({url, title})
                    this.setState({
                      websits: this.state.websits
                    })
                    try {
                      await AsyncStorage.setItem('websits', JSON.stringify(this.state.websits))
                      this.setState({modalVisible: false})
                    } catch (e) {

                    }
                  }}
                  title={'确定'}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
  // 添加网址
  addWebsit = () => {
    this.setState({
      modalVisible: true
    })
  }
  async componentWillMount () {
    try {
      const str = await AsyncStorage.getItem('websits')
      const websits = JSON.parse(str) || []
      this.setState({websits})
    } catch (e) {}
  }
  componentWillUnmount () {
    _this = null
  }
}
const styles = StyleSheet.create({
  url_button:{
    margin: 10,
    alignItems: 'center'
  },
  url_button_text:{
    fontSize: 15,
    color: 'blue'
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 300,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  text: {
    fontSize: 17
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#999',
    marginTop: 20,
    paddingHorizontal: 15
  },
  buttons: {
    bottom: 0,
    marginVertical: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})
export default HomeScreen
