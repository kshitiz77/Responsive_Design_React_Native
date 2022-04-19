//import liraries
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();
// create a component
const Routes = () => {
    const userStatus = useSelector((state) => state?.userStatus?.userData)
    return (
        <NavigationContainer>
            {true ? MainStack(Stack) : AuthStack(Stack)}
        </NavigationContainer>
    );
};


//make this component available to the app
export default Routes;
