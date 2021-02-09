import React, {useState, useEffect} from 'react'
import { View, ScrollView } from 'react-native'

import styles from './styles'

import Header from '../../components/header'
import Footer from '../../components/footer'
import TaskCar from '../../components/taskCar'

import api from '../../services/api'

export default function Home() {
  const [list, setList] = useState([])

  async function CarList(){
    await api.get('/filter/all/11:11:11:11:11:11')
    .then((response) => {
      setList(response.data)
    })
  }

  useEffect(() => {
    CarList()
  }, [])
  return (
    <View style={styles.Container}>
      <Header task={'add'}/>

      <ScrollView>
        <View style={styles.ContainerTaskCar}>
          {list.map((l) => (
            <TaskCar model={l.model} price={l.price} km={l.km}/>
          ))}
        </View>
      </ScrollView>

      <Footer task={'add'}/>
    </View>
  )
}