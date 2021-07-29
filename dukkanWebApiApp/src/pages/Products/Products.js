import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import Config from 'react-native-config';

function Pruducts() {

    console.log(Config.API_URL);
    renderProduct = ({item}) => null;

    return(
        <SafeAreaView>
            <FlatList data={null} renderItem={renderProduct}/>
        </SafeAreaView>
    )
}

export default Pruducts;