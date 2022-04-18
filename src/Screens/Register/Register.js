//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import strings from '../../constants/lang';
import { styles } from './styles';
import ButtonComp from '../../Components/ButtonComp';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings'
import TextInputWithLables from '../../Components/TextInputWithLables'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// create a component
const Register = ({navigation}) => {
    const [isTrue, setIsTrue] = useState()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <HeaderComp />
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.headingStyle}>{strings.REGISTER}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TextInputWithLables
                        label={strings.FIRST_NAME}
                        placeholder={strings.ENTER_YOUR_FIRST_NAME}
                        inputStyle={{ flex: 1 }}
                    />
                    <View style={{ marginHorizontal: moderateScale(8) }} />
                    <TextInputWithLables
                        label={strings.LAST_NAME}
                        placeholder={strings.ENTER_YOUR_LAST_NAME}
                        inputStyle={{ flex: 1 }}
                    />
                </View>
                <TextInputWithLables
                    label={strings.COMPANY_NAME}
                    placeholder={strings.ENTER_YOUR_COMPANY_NAME}
                    inputStyle={{ marginVertical: moderateScaleVertical(28) }}
                />
                <TextInputWithLables
                    label={strings.DATE_OF_BIRTH}
                    placeholder={strings.ENTER_YOUR_DATE_OF_BIRTH}
                />
                <TextInputWithLables
                    label={strings.PHONE_NUMBER}
                    placeholder={strings.ENTER_YOUR_PHONE_NUMBER}
                    inputStyle={{ marginVertical: moderateScaleVertical(28) }}
                />
                <TextInputWithLables
                    label={strings.EMAIL}
                    placeholder={strings.ENTER_YOUR_EMAIL}
                    keyboardType="email-address"
                    inputStyle={{ marginBottom: moderateScale(28) }}
                />
                <View style={{ flexDirection: 'row' }}>
                    <TextInputWithLables
                        label={strings.COUNTRY}
                        placeholder={strings.ENTER_YOUR_COUNTRY}
                        inputStyle={{ flex: 1 }}
                    />
                    <View style={{ marginHorizontal: moderateScale(8) }} />
                    <TextInputWithLables
                        label={strings.POSTAL_ZIP_CODE}
                        placeholder={strings.POSTAL_ZIP_CODE}
                        inputStyle={{ flex: 1 }}
                    />
                </View>
                <TextInputWithLables
                    label={strings.ADDRESS}
                    placeholder={strings.ENTER_YOUR_ADDRESS}
                    inputStyle={{ marginVertical: moderateScaleVertical(28) }}
                />
                <TextInputWithLables
                    label={strings.REFERRAL_CODE}
                    placeholder={strings.REFERRAL_CODE}
                    inputStyle={{ marginBottom: moderateScale(28) }}
                />
                <TouchableOpacity style={styles.bottomView} 
                activeOpacity={0.7}
                onPress={() => setIsTrue(!isTrue)}>
                <Image source={isTrue? imagePath.activeCheck : imagePath.inactiveCheck} style={{marginRight:moderateScale(13)}}/>
                    <Text>{strings.PRIVACY_POLICY_TEXT}</Text>
                </TouchableOpacity>
                <ButtonComp
                    btnText={strings.CONTINUE}
                    btnStyle={{ width: '100%' }}
                    onPress={() => navigation.navigate(navigationStrings.SET_PASSWORD)}
                />
                </KeyboardAwareScrollView>
            </View>
        </SafeAreaView>
    );
};

// define your styles

//make this component available to the app
export default Register;
