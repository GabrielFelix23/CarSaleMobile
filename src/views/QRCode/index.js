import React from 'react'
import {View, Text} from 'react-native'

import styles from './styles'

import Header from '../../components/header'
import Footer from '../../components/footer'

export default function QRCode(){
    return(
        <View style={styles.container}>
            <Header/>
            <Text>QRCODE</Text>
            <Footer/>
        </View>
    )
}