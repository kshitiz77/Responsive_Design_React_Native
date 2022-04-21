//import liraries
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();
// create a component
const Routes = () => {
    const userStatus = useSelector((state) => state?.userStatus?.userData)
    console.log(userStatus)
    return (
        <NavigationContainer>
            {userStatus != null ? MainStack(Stack) : AuthStack(Stack)}
        </NavigationContainer>
    );
};


//make this component available to the app
export default Routes;
