//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Routes from './src/navigation/Routes';

// create a component
const App = () => {
  return (
    <View style={{flex:1}}>
      <Routes />
    </View>
  );
};


//make this component available to the app
export default App;
