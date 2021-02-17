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
                    <Text style={styles.label}>Marca</Text>
                    <TextInput style={styles.input} placeholder="Marca..."/>

                    <Text style={styles.label}>Modelo</Text>
                    <TextInput style={styles.input} placeholder="Modelo..."/>

                    <Text style={styles.label}>Preço</Text>
                    <TextInput style={styles.input} placeholder="Preço..."/>

                    <Text style={styles.label}>Chassi</Text>
                    <TextInput style={styles.input} placeholder="Chassi..."/>

                    <Text style={styles.label}>Ano</Text>
                    <TextInput style={styles.input} placeholder="Ano..."/>

                    <Text style={styles.label}>KM/H</Text>
                    <TextInput style={styles.input} placeholder="KM/H..."/>

                    <Text style={styles.label}>Câmbio</Text>
                    <TextInput style={styles.input} placeholder="Câmbio..."/>

                    <Text style={styles.label}>Portas</Text>
                    <TextInput style={styles.input} placeholder="Portas..."/>

                    <Text style={styles.label}>Cor</Text>
                    <TextInput style={styles.input} placeholder="Cor..."/>

                    <Text style={styles.label}>Blindado</Text>
                    <TextInput style={styles.input} placeholder="Blindado..."/>

                    <Text style={styles.label}>Estado</Text>
                    <TextInput style={styles.input} placeholder="Estado..."/>

                    <Text style={styles.label}>Cidade</Text>
                    <TextInput style={styles.input} placeholder="Cidade..."/>
                </ScrollView> 
            <Footer task={'save'}/>
        </KeyboardAvoidingView>
    )
}