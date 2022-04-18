//import liraries
import React, { useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View, Image } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import TextInputWithLables from '../../Components/TextInputWithLables';
import imagePath from '../../constants/imagePath';
import strings, { changeLaguage } from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import { moderateScaleVertical, scale } from '../../styles/responsiveSize';
import { styles } from './styles';
import RNRestart from 'react-native-restart'

// create a component
const Login = ({ navigation }) => {
    const [isVisible, setIsVisible] = useState()

    const [lng, setLng] = useState()

    const changeAppLaguage = (key) => {
        changeLaguage(key)
        RNRestart.Restart()
    }
    // const 
    return (
        <View style={styles.container}>
            <View>
                <ImageBackground
                    source={{ uri: "https://wallpaperaccess.com/full/342047.jpg" }}
                    style={styles.imgStyle}>
                    <Text style={styles.loginTextStyle}>{strings.LOGIN}</Text>
                </ImageBackground>
                <View style={styles.mainStyle}>
                    <TextInputWithLables
                        placeholder={strings.ENTER_YOUR_EMAIL}
                        label={strings.EMAIL_ADDRESS}
                        inputStyle={{ marginBottom: moderateScaleVertical(28) }}
                        keyboardType='email-address'
                    />
                    <TextInputWithLables
                        placeholder={strings.ENTER_YOUR_PASSWORD}
                        label={strings.PASSWORD}
                        secureTextEntry={isVisible}
                        rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
                        onPressRight={() => setIsVisible(!isVisible)}
                    />
                    <TouchableOpacity
                        style={styles.forgotView}
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate(navigationStrings.FORGOT_PASSWORD)}>
                        <Text style={styles.forgotTextStyle}>{strings.FORGOT_PASSWORD_TEXT}</Text>
                    </TouchableOpacity>
                    <ButtonComp
                        btnText={strings.LOGIN}
                    />
                    <TouchableOpacity style={styles.authBtnContainer}>
                        <Image source={imagePath.fbLogo} style={styles.authImgStyle}/>
                        <Text style={styles.authTextStyle}>{strings.LOGIN_WITH_FACEBOOK}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.authBtnContainer}>
                        <Image source={imagePath.googleLogo} style={styles.authImgStyle}/>
                        <Text style={styles.authTextStyle}>{strings.LOGIN_WITH_FACEBOOK}</Text>
                    </TouchableOpacity>
                    {/* <ButtonComp
                        btnText={strings.CHANGE_LANGUAGE_EN}
                        btnStyle={{ marginVertical: moderateScaleVertical(20) }}
                        onPress={() => changeAppLaguage('en')}
                    />
                    <ButtonCompz
                        btnText={strings.CHANGE_LANGUAGE_FR}
                        onPress={() => changeAppLaguage('fr')}
                    /> */}
                </View>
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.bottomTextStyle}>{strings.NOT_A_MEMBER} </Text>
                <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.CHOOSE_ACCOUNT)}>
                    <Text style={styles.joinNowTextStyle}>{strings.JOIN_NOW}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

//make this component available to the app
export default Login;
