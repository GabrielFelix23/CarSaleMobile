import React from 'react'
import {View, Text, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native'

//Components
import Header from '../../components/header'
import Footer from '../../components/footer'

import styles from './styles'

export default function Sell({navigation}){
    return(
        <KeyboardAvoidingView style={styles.container}>
            <Header task={'back'} navigation={navigation}/>
                <ScrollView contentContainerStyle={styles.containerInputs}>
                    <Text>Marca</Text>
                    <TextInput placeholder="Marca..."/>

                    <Text>Modelo</Text>
                    <TextInput placeholder="Modelo..."/>

                    <Text>Preço</Text>
                    <TextInput placeholder="Preço..."/>

                    <Text>Chassi</Text>
                    <TextInput placeholder="Chassi..."/>

                    <Text>Ano</Text>
                    <TextInput placeholder="Ano..."/>

                    <Text>KM/H</Text>
                    <TextInput placeholder="KM/H..."/>

                    <Text>Câmbio</Text>
                    <TextInput placeholder="Câmbio..."/>

                    <Text>Portas</Text>
                    <TextInput placeholder="Portas..."/>

                    <Text>Cor</Text>
                    <TextInput placeholder="Cor..."/>

                    <Text>Blindado</Text>
                    <TextInput placeholder="Blindado..."/>

                    <Text>Estado</Text>
                    <TextInput placeholder="Estado..."/>

                    <Text>Cidade</Text>
                    <TextInput placeholder="Cidade..."/>
                </ScrollView> 
            <Footer task={'save'}/>
        </KeyboardAvoidingView>
    )
}