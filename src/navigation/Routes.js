//import liraries
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';

// create a component
const Routes = () => {
    return (
        <NavigationContainer>
            {AuthStack()}
        </NavigationContainer>
    );
};


//make this component available to the app
export default Routes;
