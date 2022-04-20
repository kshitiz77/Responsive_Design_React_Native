//import liraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import strings from './src/constants/lang';
import Routes from './src/navigation/Routes';
import store from './src/redux/store';
import { getUserData } from './src/utils/utils';
import actions from './src/redux/actions';
import { requestUserPermission, notificationListener } from './src/utils/notificationServices'

// create a component
const App = () => {

  const [lng, setLng] = useState(false)

  useEffect(() => {
    requestUserPermission()
    notificationListener()
    getLng();
    getUserData().then((res) => {
      console.log("store data", res)
      actions.login(res)
    })
  }, [])

  const getLng = async () => {
    try {
      const lng = await AsyncStorage.getItem('applanguage')
      console.log("Lng++++", lng)
      if (!!lng) {
        strings.setLanguage(lng)
        setLng(true)
      } else {
        strings.setLanguage('en')
        setLng(true)
      }
    } catch (error) {
      console.log("error raised ")
    }
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        {lng ? <Routes /> : <View />}
      </Provider>
    </SafeAreaProvider>
  );
};


//make this component available to the app
export default App;
