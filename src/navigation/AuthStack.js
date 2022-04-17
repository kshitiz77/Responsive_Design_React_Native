import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import navigationStrings from '../constants/navigationStrings'
import {
    Login,
    ChooseAccount,
    ForgotPassword,
    SetPassword,
    Register
} from '../Screens'

const Stack = createNativeStackNavigator();

const AuthStack = () =>{
    return(
        <Stack.Navigator screenOptions={{ headerShown:false }}>
            <Stack.Screen name={navigationStrings.LOGIN} component={Login}/>
            <Stack.Screen name={navigationStrings.REGISTER} component={Register} />
            <Stack.Screen name={navigationStrings.SET_PASSWORD} component={SetPassword} />
            <Stack.Screen name={navigationStrings.CHOOSE_ACCOUNT} component={ChooseAccount} />
            <Stack.Screen name={navigationStrings.FORGOT_PASSWORD} component={ForgotPassword} />
        </Stack.Navigator>
    )
}

export default AuthStack