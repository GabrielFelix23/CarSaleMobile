import React, {useState, useEffect} from 'react'
import {View, Text, Alert, StyleSheet, TouchableOpacity} from 'react-native'
import {BarCodeScanner} from 'expo-barcode-scanner'
import * as Network from 'expo-network'

import styles from './styles'

export default function QRCode({navigation}){
    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScanned] = useState(false)

    async function getMacAddress(){
        await Network.getMacAddressAsync().then(mac => {
            Alert.alert(mac)
        })
    }

    const handleBarCodeScanned = ({data}) => {
        setScanned(true);
        if(data === 'getMacaddress')
            getMacAddress()
        else
            Alert.alert('QRCODE inválido!')
    }

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === 'granted');
          })()
    },[])
    return(
        <View style={styles.container}>
            <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={StyleSheet.absoluteFillObject}/>

            <View style={styles.header}>
                <Text style={styles.headerText}>Conectar com minha conta na web</Text>
            </View>

            <View style={styles.contianerButtons}>
                <View style={styles.buttons}>
                    <TouchableOpacity 
                    style={styles.buttonBack}
                    onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.textButton}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={scanned ? styles.buttonScan : styles.buttonScanInative}
                    onPress={() => setScanned(false)}>
                        <Text style={styles.textButton}>Scan Novamente</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}