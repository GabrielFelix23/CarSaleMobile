import React, {useState, useEffect} from 'react'
import { View, ScrollView, ActivityIndicator } from 'react-native'

import styles from './styles'

import Header from '../../components/header'
import Footer from '../../components/footer'
import TaskCar from '../../components/taskCar'

import api from '../../services/api'

export default function Home({navigation}) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  async function CarList(){
    setLoading(true)
    await api.get('/filter/all/11:11:11:11:11:11')
    .then((response) => {
      setList(response.data)
      setLoading(false)
    })
  }

  function New(){
    navigation.navigate('Sell')
  }

  useEffect(() => {
    CarList()
  }, [])
  return (
    <View style={styles.Container}>
      <Header task={'add'}/>

      <ScrollView>
        <View style={styles.ContainerTaskCar}>
          {
            loading ?
              <ActivityIndicator color={'red'} size={50}/>
            :
            list.map((l) => (
              <TaskCar model={l.model} price={l.price} km={l.km} brand={l.brand} navigation={navigation}/>
            ))
          }
        </View>
      </ScrollView>

      <Footer task={'add'} onPress={New}/>
    </View>
  )
}