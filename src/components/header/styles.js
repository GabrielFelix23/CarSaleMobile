import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 90,
        backgroundColor: '#F53131',
        borderBottomWidth: 5,
        borderBottomColor: '#CC0000',
        paddingHorizontal: 20,
        paddingTop: 20, 
        
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        flex: 1,
        alignItems: 'center'
    },
    image:{
        width: 100,
        height: 45
    },
})

export default styles