import { StyleSheet, Dimensions } from 'react-native';


const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        
    },
    body_container: {
        flex: 1,
        padding: 10
    },
    image: {
        height: deviceSize.height / 3,
        width: deviceSize.width,
        resizeMode: 'contain',
        backgroundColor: 'white',

    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },
    desc: {
        fontStyle: 'italic'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'right'
    }
})