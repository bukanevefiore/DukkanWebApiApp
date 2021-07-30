import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
//import Config from 'react-native-config';
import axios from 'react-native-axios';
import ProductsCard from '../../components/ProductsCard';


function Pruducts() {
  //  console.log(Config.API_URL);


    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const {data: productData} = await axios.get('https://fakestoreapi.com/products');
        setData(productData);
    }

    renderProduct = ({item}) => <ProductsCard products={item}/>;

    return(
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct}/>
        </SafeAreaView>
    )
}

export default Pruducts;