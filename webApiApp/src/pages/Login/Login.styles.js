import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex:1,
        
    },
    logo: {
        alignSelf: 'center',
        tintColor: 'white',
        resizeMode: 'contain',
        height: Dimensions.get('window').height /3,
        width: Dimensions.get('window').width
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center'
    },
    body_container: {
        flex: 1
    }
});