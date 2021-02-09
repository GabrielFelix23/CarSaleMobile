import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Container:{
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
    },
    ContainerTask:{
        borderWidth: 1,
        borderColor: '#706E6E',
        borderRadius: 5,
        width: 230,
        height: 'auto',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    car:{
        width: 50,
        height: 40
    },
    ContainerDescription:{
        marginTop: 15,
    },
    TextDescription:{
        fontSize: 17,
        fontWeight: 'bold'
    },
    button: {
        width: 80,
        height: 35,
        backgroundColor: '#F53131',
        borderRadius: 5,
        marginTop: 15,

        alignItems: 'center',
        justifyContent: 'center',
    },
    TextButton:{
        color: '#fff',
        fontSize: 18,
    }
})

export default styles