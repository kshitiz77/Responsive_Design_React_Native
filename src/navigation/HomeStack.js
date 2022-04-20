import React from 'react'
import { Home } from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    
        <Stack.Screen
          options={{ headerShown: false }}
          name={navigationStrings.HOME}
          component={Home}
        />
  )
}

export default HomeStack