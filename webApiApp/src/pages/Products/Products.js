import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
//import Config from 'react-native-config';
import ProductsCard from '../../components/ProductsCard';
import UseFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';


function Pruducts({navigation}) {
    //  console.log(Config.API_URL);

    const url = 'https://fakestoreapi.com/products';
    const {loading, data, error } = UseFetch(url);
    //console.log(data);

   function handleProductSelect(id) {
       navigation.navigate('Detail', {id});
   }

    renderProduct = ({ item }) => <ProductsCard products={item} onSelected={() => handleProductSelect(item.id)}/>;

    if(loading) {
        //return <ActivityIndicator size='large' />
        //return <Loading />
    }

    if(error) {
        //return <Error />
    }

    return (
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    )
}

export default Pruducts;