import React from 'react'
import { View, ScrollView } from 'react-native'

import styles from './styles'

import Header from '../../components/header'
import Footer from '../../components/footer'
import TaskCar from '../../components/taskCar'

export default function Home() {
  return (
    <View style={styles.Container}>
      <Header task={'add'}/>

      <ScrollView>
        <View style={styles.ContainerTaskCar}>
          <TaskCar/>
        </View>
      </ScrollView>

      <Footer task={'add'}/>
    </View>
  )
}