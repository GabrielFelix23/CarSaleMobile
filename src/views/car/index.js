import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import Header from '../../components/header'

import api from '../../services/api'
import styles from './styles'

export default function Car({navigation}){
    const [id, setId] = useState(false)
    const [list, setList] = useState([])

    async function ShowCarId(){
        await api.get(`/filter/${id}`)
        .then((response) => {
            setList(response.data)
        })
    }

    async function deleteCar(){
        await api.delete(`/delete/${id}`)
        .then(() => {
            navigation.navigate('Home')
        })
    }

    function editCar(id){
        navigation.navigate('Sell', {idTask: id})
    }

    useEffect(() => {
        if(navigation.state.params){
            setId(navigation.state.params.idTask)
        }
        ShowCarId()
    },[])

    return(
        <View style={styles.container}>
            <Header task="back" navigation={navigation}/>
            
            <View style={styles.containerCar}>
                <View style={styles.car}>
                    <Text style={styles.text}>Marca: {list.brand}</Text>
                    <Text style={styles.text}>Modelo: {list.model}</Text>
                    <Text style={styles.text}>Preço: {list.price}</Text>
                    <Text style={styles.text}>Chassi: {list.chassis}</Text>
                    <Text style={styles.text}>Ano: {list.year}</Text>
                    <Text style={styles.text}>KM/H: {list.km}</Text>
                    <Text style={styles.text}>Câmbio: {list.exchange}</Text>
                    <Text style={styles.text}>Portas: {list.port}</Text>
                    <Text style={styles.text}>Cor: {list.color}</Text>
                    <Text style={styles.text}>Blindagem: {list.shield}</Text>
                    <Text style={styles.text}>Estado: {list.state}</Text>
                    <Text style={styles.text}>Cidade: {list.city}</Text>
                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.buttonEdit} onPress={() => editCar(list._id)}>
                        <Text style={styles.textButton}>EDITAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonDelete} onPress={deleteCar}>
                        <Text style={styles.textButton}>DELETAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}