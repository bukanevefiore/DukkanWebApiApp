import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './ProductsCard.styles';

function ProductsCard({products, onSelected}) {
    return (
        <TouchableWithoutFeedback onPress={onSelected}>
            <View style={styles.container}>
            <Image style={styles.image}
            source={{uri: products.image}}
            />
            <View style={styles.body_container}>
                <Text style={styles.title}>{products.title}</Text>
                <Text style={styles.price}>{products.price}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default ProductsCard;