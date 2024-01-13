import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Login from './screen/Login';
import Register from './screen/Register';
import Home from './screen/Home';
import Insert from './screen/Insert';
import Edit from './screen/Edit';
import Detail from './screen/Detail';

const Stack = createStackNavigator();

export default function TextInputExample() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Insert" component={Insert}/>
        <Stack.Screen name="Edit" component={Edit}/>
        <Stack.Screen name="Detail" component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}