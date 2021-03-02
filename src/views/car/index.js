import React from 'react'
import {View, Text} from 'react-native'

import Header from '../../components/header'

import styles from './styles'

export default function Car({navigation}){
    return(
        <View style={styles.container}>
            <Header task="back" navigation={navigation}/>
            
            <Text>Tela Car</Text>
        </View>
    )
}