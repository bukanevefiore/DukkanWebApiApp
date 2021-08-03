import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import Button from '../../components/Button';
import styles from './Login.styles';
import Input from '../../components/Input/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Login = () => {


    function handleLogin(values) {
        console.log(values);
    };

    // yup ile email kontrolü @ ve .c işareti olmalı
    const SignupSchema = Yup.object().shape({

        username: Yup.string().email('Invalid email').required('Required'),
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
                            isSecure/>
                        <Button text="Giriş Yap" onPress={handleSubmit} />
                    </View>
                )}
            </Formik>

        </SafeAreaView>
    )
}

export default Login;