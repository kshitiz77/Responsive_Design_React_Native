//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { scale, moderateScale, verticalScale, moderateScaleVertical } from '../styles/responsiveSize'
import strings from '../constants/lang';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';

// create a component
const TextInputWithLables = ({
    label,
    placeholder,
    onChangeText = () => { },
    inputStyle = {},
    rightIcon,
    onPressRight,
    ...props
}) => {
    return (
        <View style={{ ...styles.inputContainerStyle, ...inputStyle }}>
            <Text style={styles.labelTextStyle}>{label}</Text>
            <View style={styles.flexView}>
                <TextInput
                    placeholder={placeholder}
                    style={styles.inputStyle}
                    {...props}
                />
                {rightIcon ? 
                <TouchableOpacity onPress={onPressRight} activeOpacity={0.5}>
                    <Image 
                    style={{ tintColor: colors.grayA }}
                    source={rightIcon} 
                    />
                </TouchableOpacity>
                : null
                }
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    inputContainerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: colors.grayB,
        borderRadius: moderateScale(4),
    },
    labelTextStyle: {
        fontSize: scale(15),
        color: colors.grayC,
        fontWeight: '600'
    },
    inputStyle: {
        flex:1,
        paddingVertical: moderateScaleVertical(8),
        fontSize: scale(16),
        colors: colors.black,
    },
    flexView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

//make this component available to the app
export default TextInputWithLables;
