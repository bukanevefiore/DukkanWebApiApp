import { data } from 'browserslist';
import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import useFetch from '../../hooks/useFetch';
import styles from './Detail.styles';

function Detail({routes}) {

    const {id} = routes.params;

    const url = 'https://fakestoreapi.com/products';
    const {loading, error, data} = useFetch(url+'/'+id);

    if(loading) {

    }

    if(error) {

    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image source={{uri: data.image}} style={styles.image} />
                <View style={styles.body_container}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.desc}>{data.description}</Text>
                    <Text style={styles.price}>{data.price}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Detail;