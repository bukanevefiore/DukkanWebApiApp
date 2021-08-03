import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './Input.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({placeholder, onType, value, iconName, isSecure}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} secureTextEntry={isSecure} placeholder={placeholder} onChangeText={onType}  value={value}/>
            <Icon color= 'gray' name={iconName} size={25} />
        </View>
    )
}

export default Input;