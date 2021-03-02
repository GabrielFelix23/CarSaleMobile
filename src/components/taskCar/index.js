import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './styles'
import car from '../../assets/car.png'

export default function TaskCar({model, price, km, navigation}){

    function plus(){
        navigation.navigate('Car')
    }

    return(
        <View style={styles.Container}>
            <View style={styles.ContainerTask}>
                <Image source={car} style={styles.car}/>
                
                <View style={styles.ContainerDescription}>
                    <Text style={styles.TextDescription}>Carro: {model}</Text>
                    <Text style={styles.TextDescription}>R$ {price}</Text>
                    <Text style={styles.TextDescription}>KM/H {km}</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={plus}>
                    <Text style={styles.TextButton}>Ver +</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}