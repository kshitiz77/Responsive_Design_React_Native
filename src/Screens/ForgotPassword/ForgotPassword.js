//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import strings from '../../constants/lang';
import { styles } from './styles';
import ButtonComp from '../../Components/ButtonComp';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings'
import TextInputWithLables from '../../Components/TextInputWithLables'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { moderateScaleVertical } from '../../styles/responsiveSize';

// create a component
const ForgotPassword = ({navigation}) => {
    const [isVisible, setIsVisible] = useState()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <HeaderComp />
                <Text style={styles.headingText}>{strings.FORGOT_PASSWORD_HEADING}</Text>
                <Text style={styles.descText}>{strings.FORGOT_PASSWORD_DESC}</Text>
                <Text style={styles.userPhoneNumber}>+911234567890</Text>
                <TextInputWithLables
                    placeholder={strings.ENTER_YOUR_PASSWORD}
                    label={strings.PASSWORD} 
                    secureTextEntry={isVisible}
                    rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
                    onPressRight={() => setIsVisible(!isVisible)}
                    inputStyle={{marginVertical:moderateScaleVertical(54)}}
                    /> 
                     <ButtonComp
                    btnText={strings.CONTINUE}
                    btnStyle={styles.btnStyle}
                    onPress={() => navigation.navigate(navigationStrings.SET_PASSWORD)}
                    img={imagePath.forward}
                />
            </View>
        </SafeAreaView>
    );
};

// define your styles

//make this component available to the app
export default ForgotPassword;
