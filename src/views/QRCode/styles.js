import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        width: '100%',
        height: 90,
        backgroundColor: '#F53131',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#CC0000',
        borderBottomWidth: 5,
        paddingTop: 20,
    },
    headerText:{
        color: "#fff",
        fontSize: 20
    },
    contianerButtons:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons:{
        flexDirection: 'row',
        position: 'relative',
        top: '144.5%',
        width: '100%',
    },
    buttonBack:{
        backgroundColor: '#F53131',
        width: '50%',
        height: 50,

        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton:{
        fontSize: 22,
        color: "#fff"
    },
    buttonScan:{
        backgroundColor: '#0080FF',
        width: '50%',        
        height: 50,

        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonScanInative:{
        backgroundColor: '#0080FF',
        width: '50%',
        height: 50,
        opacity: 0.5,

        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles