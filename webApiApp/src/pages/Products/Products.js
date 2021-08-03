import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import Config from 'react-native-config';
import ProductsCard from '../../components/ProductsCard';
import UseFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { useSelector } from 'react-redux';


function Pruducts({navigation}) {
    //const url = 'https://fakestoreapi.com/products';
    const {error, loading, data} = UseFetch(Config.API_PRODUCT_URL);
    //console.log(data);
    const user = useSelector(s => s.user);

   function handleProductSelect(id) {
       navigation.navigate('Detail', {id});
   }

    renderProduct = ({ item }) => <ProductsCard products={item} onSelected={() => handleProductSelect(item.id)}/>;

    if(loading) {
        //return <ActivityIndicator size='large' />
        return <Loading />;
    }

    if(error) {
        return <Error />;
    }

    return (
        <SafeAreaView>
            <Text>{user.username}</Text>
            <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    )
}

export default Pruducts;