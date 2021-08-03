import React, {useState} from 'react';
import axios from 'react-native-axios';

function UsePost() {
    const [data, setData] =useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const post = async (url, apiData) => {
        try {
            setLoading(true);
            const {data: responseData} = await axios.post(url, apiData);
            setData(responseData);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return {data, loading, error, post};
}

export default UsePost;