import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import styles from './styles'

import logo from '../../assets/logo.png'
import qrcode from '../../assets/qrcode.png'
import back from '../../assets/back.png'

export default function Header({task, navigation}) {
  function Back(){
    navigation.navigate('Home')
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={Back}>
        <Image source={task == 'add' ? qrcode : back}/>
      </TouchableOpacity>

      <View style={styles.logo}>
        <Image source={logo} style={styles.image}/>
      </View>
    </View>
  )
}