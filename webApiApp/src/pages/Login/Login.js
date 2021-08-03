import React from 'react';
import { View, Text, SafeAreaView, Image, Alert } from 'react-native';
import Button from '../../components/Button';
import styles from './Login.styles';
import Input from '../../components/Input/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';

import { useDispatch } from 'react-redux';

const Login = ({ navigation }) => {

    const { data, error, loading, post } = usePost();
    const dispatch = useDispatch();

    function handleLogin(values) {
        console.log(values);
        post(Config.API_AUTH_URL + "/login", values);
    };

    if (error) {
        Alert.alert("Dükkan", "Bir hata oluştu!"+ error);
    }

    if (data) {
        if (data.status === 'Error') {
            Alert.alert("Dükkan", "Kullanıcı bulunamadı, bilgilerinizi kontrol edin!");
        }
        else {
            console.log("başarılı");
            dispatch({type: 'SET_USER', payload: {user}});
            navigation.navigate('Products');
        }
    }

    // Yup ile, username ve password kontrol - validation 
    const SignupSchema = Yup.object().shape({
        password: Yup
            .string()
            .min(4)
            .max(10, 'Password should not excced 10 chars.')
            .required(),
    });


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
            </View>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin}
                validationSchema={SignupSchema}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <View style={styles.body_container}>
                        <Input placeholder="Kullanıcı adı giriniz.."
                            onType={handleChange('username')}
                            value={values.username}
                            iconName='account' />
                        <Input placeholder="Şifre giriniz.."
                            onType={handleChange('password')}
                            value={values.password}
                            iconName='key'
                            isSecure />
                        <Button text="Giriş Yap" onPress={handleSubmit}  loading={loading}/>
                    </View>
                )}
            </Formik>

        </SafeAreaView>
    )
}

export default Login;

const user = {
    "address": {
        "geolocation": {
            "lat": "-37.3159",
            "long": "81.1496"
        },
        "city": "kilcoole",
        "street": "new road",
        "number": 7682,
        "zipcode": "12926-3874"
    },
    "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": {
        "firstname": "john",
        "lastname": "doe"
    },
    "phone": "1-570-236-7033",
    "__v": 0

};