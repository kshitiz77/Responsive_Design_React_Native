import React from 'react'
import { Home } from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <>
      <Stack.Navigator initialRouteName={navigationStrings.HOME}>
        <Stack.Screen
          options={{ headerShown: false }}
          name={navigationStrings.HOME}
          component={Home}
        />
      </Stack.Navigator>
    </>
  )
}

export default HomeStack