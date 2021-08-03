import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './Button.styles';


const Button = ({ text, onPress, loading }) => {
    return (
        <TouchableOpacity style={styles.container}
            onPress={onPress}>
            {loading ? (
                <ActivityIndicator color='white' />)
                : (<Text style={styles.title}>{text}</Text>
                )}
        </TouchableOpacity>
    )
}

export default Button;

