import { StyleSheet, Dimensions } from 'react';


const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    body_container: {
        flex: 1,
        padding: 10,
    },
    image: {
        height: deviceSize.height / 3,
        width: deviceSize.width,
    },
    title: {
        fontWeight: 'bold',

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