import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import styles from './styles'

import add from '../../assets/add.png'
import save from '../../assets/save.png'

export default function Footer({task, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image source={task == 'add' ? add : save} style={styles.image}/>
      </TouchableOpacity>
    </View>
  )
}