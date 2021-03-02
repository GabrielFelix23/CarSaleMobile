import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    containerCar:{
        flex: 1,
        alignItems: 'center',
        marginTop: '15%'
    },
    car:{   
        borderWidth: 1,
        borderColor: '#A4A4A4',
        borderRadius: 5,
        width: '55%',
        height: 'auto',
        paddingVertical: 30,
        paddingLeft: '15%',
    },
    text: {
        fontSize: 19,
        fontWeight: 'bold'
    },
    containerButton:{
        marginVertical: 20,
        flexDirection: 'row',
    },
    buttonEdit:{
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#FCB66A',
        width: 100,
        height: 50,
        borderRadius: 5,
        margin: 10,

    },
    buttonDelete:{
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#A7A7A7',
        width: 100,
        height: 50,
        borderRadius: 5,
        margin: 10
    },
    textButton:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles