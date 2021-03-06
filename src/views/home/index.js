import React, {useState, useEffect} from 'react'
import { View, ScrollView, ActivityIndicator} from 'react-native'

import styles from './styles'

import Header from '../../components/header'
import Footer from '../../components/footer'
import TaskCar from '../../components/taskCar'
import * as Network from 'expo-network'

import api from '../../services/api'

export default function Home({navigation}) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const [macaddress, setMacaddress] = useState()

  async function getMacAddress(){
    await Network.getMacAddressAsync().then(mac => {
        setMacaddress(mac)
    })
  }

  async function CarList(){
    setLoading(true)
    await api.get(`/filter/all/${macaddress}`)
    .then((response) => {
      setList(response.data)
      setLoading(false)
    })
  }

  function sell(){
    navigation.navigate('Sell')
  }

  function qrcode(){
    navigation.navigate('QRCode')
  }

  function show(id){
    navigation.navigate('Car', {idTask: id})
  }

  useEffect(() => {
      getMacAddress().then(() => {
        CarList()
      })
  },[])

  return (
    <View style={styles.Container}>
      <Header task={'add'} navigation={qrcode}/>

      <ScrollView>
        <View style={styles.ContainerTaskCar}>
          {
            loading ?
              <ActivityIndicator color={'red'} size={50}/>
            :
            list.map((l) => (
              <TaskCar model={l.model} price={l.price} km={l.km} brand={l.brand} onPress={() => show(l._id)}/>
            ))
          }
        </View>
      </ScrollView>

      <Footer task={'add'} onPress={sell}/>
    </View>
  )
}