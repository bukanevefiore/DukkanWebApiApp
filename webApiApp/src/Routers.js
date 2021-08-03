/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import Detail from './pages/Detail/Detail';
import Products from './pages/Products/Products';
import Login from './pages/Login';
import Loading from './components/Loading';
import { useSelector, useDispatch} from 'react-redux';
import { BackgroundColor } from 'chalk';


const Stack = createStackNavigator();

function Router() {

  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      )
        : !userSession ? (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Products" component={Products} 
            options={{
              headerStyle: {backgroundColor: 'white'},
              headerRight: () => 
              <Icon name="logout" size={30} color="red" 
              onPress={() => dispatch({type: 'REMOVE_USER'})}/>
            }}/>
            <Stack.Screen name="Detail" component={Detail}
            options={{
              headerStyle: {backgroundColor: 'white'},
              
            }}/>
          </Stack.Navigator>
        )}
    </NavigationContainer>
  )
}

export default Router;