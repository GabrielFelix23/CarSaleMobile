import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './styles'
import car from '../../assets/car.png'

export default function TaskCar(){
    return(
        <View style={styles.Container}>
            <View style={styles.ContainerTask}>
                <Image source={car} style={styles.car}/>
                
                <View style={styles.ContainerDescription}>
                    <Text style={styles.TextDescription}>Carro: Sonata</Text>
                    <Text style={styles.TextDescription}>R$ 50.000</Text>
                    <Text style={styles.TextDescription}>KM/H 60.000</Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.TextButton}>Ver +</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}