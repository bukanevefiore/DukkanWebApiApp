import {useEffect, useState} from 'react';
import axios from 'react-native-axios';


function UseFetch(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const { data: productData } = await axios.get(url);
            setData(productData);
            setLoading(false);
        } catch (error) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {error, loading, data};
    //console.log(data);

}

export default UseFetch;