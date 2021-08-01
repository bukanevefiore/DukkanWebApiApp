import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        borderColor: '#bdbdbd',
        backgroundColor: '#e0e0e0',
        flexDirection: 'row',
        margin: 10
    },
    body_container: {
        justifyContent: 'space-between',
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    price: {
        textAlign: 'right',
        padding: 5,
        fontSize: 16,
        fontStyle: 'italic'
    },
    image: {
        minHeight: 100,
        width: 100,
        backgroundColor: 'white',
        resizeMode: 'contain'
    }
})