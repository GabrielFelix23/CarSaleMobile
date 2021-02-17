import React from 'react'
import {View, Text} from 'react-native'

//Components
import Header from '../../components/header'
import Footer from '../../components/footer'

import styles from './styles'

export default function Sell({navigation}){
    return(
        <View style={styles.container}>
            <Header task={'back'} navigation={navigation}/>
            <Text>Sell</Text>
            <Footer task={'save'}/>
        </View>
    )
}