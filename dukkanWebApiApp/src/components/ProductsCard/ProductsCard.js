import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Products.styles';

function ProductsCard({products}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image}
            source={{uri: products.image}}
            />
            <View style={styles.body_container}>
                <Text style={styles.title}>{products.title}</Text>
                <Text style={styles.price}>{products.price}</Text>
            </View>
        </View>
    )
}

export default ProductsCard;