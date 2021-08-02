import React from 'react';
import { View, Text, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import useFetch from '../../hooks/useFetch';
import styles from './Detail.styles';


function Detail({route}) {

    const {id} = route.params;

    //const url = 'https://fakestoreapi.com/products';
    const {error, loading, data} = useFetch(Config.API_URL+'/'+id);
    console.log(data.title);

    if(loading) {
        return <Loading />;
    }

    if(error) {
        return <Error />;
    }

    return (
       
            <View style={styles.container}>
                <Image source={{uri: data.image}} style={styles.image} />
                <View style={styles.body_container}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.desc}>{data.description}</Text>
                    <Text style={styles.price}>{data.price} TL</Text>
                </View>
            </View>
       
    )
}

export default Detail;