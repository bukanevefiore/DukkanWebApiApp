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
import { createStackNavigator } from '@react-navigation/stack';


import Detail from './pages/Detail/Detail';
import Products from './pages/Products/Products';

const Stack = createStackNavigator();

function Router() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={Products}/>
        <Stack.Screen name="Detail" component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;