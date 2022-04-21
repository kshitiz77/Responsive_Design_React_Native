//import liraries
import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View, Modal } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import RNRestart from 'react-native-restart';
import ButtonComp from '../../Components/ButtonComp';
import TextInputWithLables from '../../Components/TextInputWithLables';
import imagePath from '../../constants/imagePath';
import strings, { changeLaguage } from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import { moderateScale, moderateScaleVertical, scale } from '../../styles/responsiveSize';
import { styles } from './styles';
import actions from '../../redux/actions';
import { GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk'
import colors from '../../styles/colors';
// create a component
const Login = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isVisible, setIsVisible] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const userData = {
        email: email,
        password: password
    }
    const handleEmail = (email) => {
        setEmail(() => email)
    }

    const handlePassword = (password) => {
        setPassword(() => password)
    }

    const handleSubmitBtn = () => {
        if (email === "") {
            setEmailError(true)
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            setEmailError(true)
        } else if (password === "") {
            setEmailError(false)
            setPasswordError(true)
        } else if (password.length < 6) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
            console.log(email, password)
            actions.login(userData)
        }
    }
    // const [lng, setLng] = useState()

    useEffect(() => {
        GoogleSignin.configure()
    }, [])

    const googleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log("userInfo", userInfo)
            const email = userInfo.user.email;
            const userId = userInfo.user.id;
            const data = { email, userId }
            actions.login(data)
            // this.setState({ userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                console.log("error", error)
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
                console.log("error", error)
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                console.log("error", error)
            } else {
                // some other error happened
                console.log("error", error)
            }
        }
    };

    const changeAppLaguage = (key) => {
        changeLaguage(key)
        setModalVisible(!modalVisible)
        RNRestart.Restart()
    }

    const fbLogin = (resCallBack) => {
        LoginManager.logOut();
        return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
            result => {
                console.log("FB_LOGIN_RESULT =====>", result);
                if (result.declinedPermissions && result.declinedPermissions.includes('email')) {
                    resCallBack({ message: "email is required" })
                }
                if (result.isCancelled) {
                    console.log("error")
                } else {
                    const infoResquest = new GraphRequest(
                        '/me?fields = email, name, picture',
                        null,
                        resCallBack
                    );
                    new GraphRequestManager().addRequest(infoResquest).start()
                }
            },
            function (error) {
                console.log("login failed with error", error)
            }
        )
    }

    const onFbLogin = async () => {
        try {
            await fbLogin(resInfoCallBack)
        } catch (error) {
            console.log("error", error)
        }
    }

    const resInfoCallBack = async (error, result) => {
        if (error) {
            console.log("Login Error", error)
        } else {
            const userData = result;
            console.log(userData)
            actions.login(userData);

        }
    }
    // const 
    return (
        <View style={styles.container}>
            <View>
                <ImageBackground
                    source={{ uri: "https://wallpaperaccess.com/full/342047.jpg" }}
                    style={styles.imgStyle}>
                    <View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                // Alert.alert("Modal has been closed.");
                                setModalVisible(!modalVisible);
                            }}
                        >

                            <View style={styles.centeredView}>
                                <View style={styles.modalContainerStyle} >


                                    <ButtonComp
                                        btnText={strings.CHANGE_LANGUAGE_EN}
                                        btnStyle={{ marginVertical: moderateScaleVertical(20) }}
                                        onPress={() => changeAppLaguage('en')}
                                    />
                                    <ButtonComp
                                        btnText={strings.CHANGE_LANGUAGE_FR}
                                        btnStyle={{ marginBottom: moderateScaleVertical(20), paddingHorizontal: moderateScale(10) }}
                                        onPress={() => changeAppLaguage('fr')}
                                    />
                                </View>
                            </View>
                        </Modal>
                        <TouchableOpacity style={styles.chooseLanguageStyle} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.chooseLanguageText}>{strings.CHOOSE_LANGUAGE}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.loginTextStyle}>{strings.LOGIN}</Text>
                </ImageBackground>
                <View style={styles.mainStyle}>
                    <TextInputWithLables
                        placeholder={strings.ENTER_YOUR_EMAIL}
                        label={strings.EMAIL_ADDRESS}
                        value={email}
                        inputStyle={{ marginBottom: moderateScaleVertical(28) }}
                        keyboardType='email-address'
                        onChangeText={(email) => handleEmail(email)}
                    />
                    <TextInputWithLables
                        placeholder={strings.ENTER_YOUR_PASSWORD}
                        label={strings.PASSWORD}
                        value={password}
                        secureTextEntry={isVisible}
                        rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
                        onPressRight={() => setIsVisible(!isVisible)}
                        onChangeText={(password) => handlePassword(password)}
                    />
                    <TouchableOpacity
                        style={styles.forgotView}
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate(navigationStrings.FORGOT_PASSWORD)}>
                        <Text style={styles.forgotTextStyle}>{strings.FORGOT_PASSWORD_TEXT}</Text>
                    </TouchableOpacity>
                    <ButtonComp
                        btnText={strings.LOGIN}
                        onPress={handleSubmitBtn}
                    />
                    <TouchableOpacity style={styles.authBtnContainer} activeOpacity={0.8} onPress={onFbLogin}>
                        <Image source={imagePath.fbLogo} style={styles.authImgStyle} />
                        <Text style={styles.authTextStyle}>{strings.LOGIN_WITH_FACEBOOK}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.authBtnContainer} onPress={googleLogin}>
                        <Image source={imagePath.googleLogo} style={styles.authImgStyle} />
                        <Text style={styles.authTextStyle}>{strings.LOGIN_WITH_GOOGLE}</Text>
                    </TouchableOpacity>

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
