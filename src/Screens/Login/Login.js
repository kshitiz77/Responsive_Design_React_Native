//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { moderateScaleVertical, scale } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import strings from '../../constants/lang';
import TextInputWithLables from '../../Components/TextInputWithLables';
import imagePath from '../../constants/imagePath';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';

// create a component
const Login = ({navigation}) => {
    const [isVisible, setIsVisible] = useState()
    return (
        <View style={styles.container}>
        <View>
            <ImageBackground
                source={{ uri: "https://wallpaperaccess.com/full/342047.jpg" }}
                style={styles.imgStyle}>
                <Text style={styles.loginTextStyle}>{strings.LOGIN_CAP_TEXT}</Text>
            </ImageBackground>
            <View style={styles.mainStyle}>
                <TextInputWithLables
                    placeholder={strings.ENTER_YOUR_EMAIL}
                    label={strings.EMAIL_ADDRESS} 
                    inputStyle={{marginBottom:moderateScaleVertical(28)}}
                    keyboardType='email-address'
                    />
                <TextInputWithLables
                    placeholder={strings.ENTER_YOUR_PASSWORD}
                    label={strings.PASSWORD} 
                    secureTextEntry={isVisible}
                    rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
                    onPressRight={() => setIsVisible(!isVisible)}
                    />
                <TouchableOpacity style={styles.forgotView} activeOpacity={0.5}>
                    <Text style={styles.forgotTextStyle}>{strings.FORGOT_PASSWORD_TEXT}</Text>
                </TouchableOpacity>
                <ButtonComp 
                    btnText={strings.LOGIN}
                />
            </View>
            </View>
                <View style={styles.bottomView}>
                    <Text style={{color:colors.grayC, fontSize:scale(16)}}>{strings.NOT_A_MEMBER} </Text>
                    <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.CHOOSE_ACCOUNT)}>
                        <Text style={styles.joinNowTextStyle}>{strings.JOIN_NOW}</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
};

//make this component available to the app
export default Login;
