//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../styles/colors';
import { moderateScale, moderateScaleVertical, scale } from '../styles/responsiveSize';

// create a component
const ButtonComp = ({
    btnStyle,
    btnText,
    onPress = () =>{},
    img
}) => {
    return (
        <TouchableOpacity 
        activeOpacity={0.8}
        onPress={onPress}
        style={{...styles.btnStyle, ...btnStyle}}>
            {img ? <Image style={{tintColor:colors.white}} source={img}/> : <Text style={styles.btnTextStyle}>{btnText}</Text>}
            
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btnStyle: {
        height:moderateScale(48),
        backgroundColor:colors.themeColor,
        borderRadius:moderateScale(4),
        justifyContent:'center',
        alignItems:'center'
    },
    btnTextStyle:{
        fontSize:moderateScale(16),
        color:colors.white,
        fontWeight:'bold',
        textTransform:'uppercase'
    }
});

//make this component available to the app
export default ButtonComp;
