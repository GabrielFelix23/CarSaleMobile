import React, {useState} from 'react'
import {View, Text, TextInput, KeyboardAvoidingView, ScrollView, Alert} from 'react-native'

//Components
import Header from '../../components/header'
import Footer from '../../components/footer'
import api from '../../services/api'

import styles from './styles'

export default function Sell({navigation}){
    const [brand, setBrand] = useState()
    const [price, setPrice] = useState()
    const [model, setModel] = useState()
    const [chassis, setChassis] = useState()
    const [year, setYear] = useState()
    const [km, setKm] = useState()
    const [exchange, setExchange] = useState()
    const [doors, setDoors] = useState()
    const [color, setColor] = useState()
    const [shield, setShield] = useState()
    const [state, setState] = useState()
    const [city, setCity] = useState()
    const [macaddress, setMacaddress] = useState('11:11:11:11:11:11')

    async function save(){
        if(!brand){
            Alert.alert("Marca é obrigatório!")
        }
        if(!price){
            Alert.alert("Preço é obrigatório")
        }
        if(!model){
            Alert.alert("Modelo é obrigatório!")
        }
        if(!chassis){
            Alert.alert("Chassi é obrigatório!")
        }
        if(!year){
            Alert.alert("Ano é obrigatório!")
        }
        if(!km){
            Alert.alert("km/h é obrigatório!")
        }
        if(!exchange){
            Alert.alert("Câmbio é obrigatório!")
        }
        if(!doors){
            Alert.alert("Portas  obrigatório!")
        }
        if(!color){
            Alert.alert("Cor é obrigatório!")
        }
        if(!shield){
            Alert.alert("Blindagem é obrigatório!")
        }
        if(!state){
            Alert.alert("Estado é obrigatório!")
        }
        if(!city){
            Alert.alert("Cidade é obrigatório!")
        }
        
        await api.post('/', {
            macaddress,
            brand,
            price,
            model,
            chassis,
            year,
            km,
            exchange,
            doors,
            color,
            shield,
            state,
            city
        }).then(() => {
            navigation.navigate('Home')
        })
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
            <Header task={'back'} navigation={navigation}/>
                <ScrollView contentContainerStyle={styles.containerInputs}>
                    
                    <Text style={styles.label}>Marca</Text>
                    <TextInput style={styles.input} maxLength={30} maxLength={30} value={brand} onChangeText={(text) => setBrand(text)} placeholder="Marca..."/>

                    <Text style={styles.label}>Modelo</Text>
                    <TextInput style={styles.input} maxLength={30} value={price} onChangeText={(text) => setPrice(text)} placeholder="Modelo..."/>

                    <Text style={styles.label}>Preço</Text>
                    <TextInput style={styles.input} maxLength={30} value={model} onChangeText={(text) => setModel(text)} placeholder="Preço..."/>

                    <Text style={styles.label}>Chassi</Text>
                    <TextInput style={styles.input} maxLength={30} value={chassis} onChangeText={(text) => setChassis(text)} placeholder="Chassi..."/>

                    <Text style={styles.label}>Ano</Text>
                    <TextInput style={styles.input} maxLength={30} value={year} onChangeText={(text) => setYear(text)} placeholder="Ano..."/>

                    <Text style={styles.label}>KM/H</Text>
                    <TextInput style={styles.input} maxLength={30} value={km} onChangeText={(text) => setKm(text)} placeholder="KM/H..."/>

                    <Text style={styles.label}>Câmbio</Text>
                    <TextInput style={styles.input} maxLength={30} value={exchange} onChangeText={(text) => setExchange(text)} placeholder="Câmbio..."/>

                    <Text style={styles.label}>Portas</Text>
                    <TextInput style={styles.input} maxLength={30} value={doors} onChangeText={(text) => setDoors(text)} placeholder="Portas..."/>

                    <Text style={styles.label}>Cor</Text>
                    <TextInput style={styles.input} maxLength={30} value={color} onChangeText={(text) => setColor(text)} placeholder="Cor..."/>

                    <Text style={styles.label}>Blindado</Text>
                    <TextInput style={styles.input} maxLength={30} value={shield} onChangeText={(text) => setShield(text)} placeholder="Blindado..."/>

                    <Text style={styles.label}>Estado</Text>
                    <TextInput style={styles.input} maxLength={30} value={state} onChangeText={(text) => setState(text)} placeholder="Estado..."/>

                    <Text style={styles.label}>Cidade</Text>
                    <TextInput style={styles.input} maxLength={30} value={city} onChangeText={(text) => setCity(text)} placeholder="Cidade..."/>
                    
                </ScrollView> 
            
            <Footer task={'save'} onPress={save}/>
        </KeyboardAvoidingView>
    )
}