//import liraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect,useState } from 'react';
import { View } from 'react-native';
import strings from './src/constants/lang';
import Routes from './src/navigation/Routes';

// create a component
const App = () => {

  const [lng, setLng] = useState(false)

  useEffect(() =>{
    getLng();
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
    <View style={{flex:1}}>
      {lng?<Routes />: <View/>}
    </View>
  );
};


//make this component available to the app
export default App;
