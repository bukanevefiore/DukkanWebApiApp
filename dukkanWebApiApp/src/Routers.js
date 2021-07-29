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


const Stack = createStackNavigator();

function Router() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen />
        <Stack.Screen />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;