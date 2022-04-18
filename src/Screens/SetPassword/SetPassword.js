//import liraries
import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import TextInputWithLables from '../../Components/TextInputWithLables';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import { moderateScaleVertical } from '../../styles/responsiveSize';
import { styles } from './styles';

// create a component
const SetPassword = ({navigation}) => {
    const [isVisible, setIsVisible] = useState()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <HeaderComp />
                <Text style={styles.headingText}>{strings.SET_PASSWORD_HEADING}</Text>
                <Text style={styles.descText}>{strings.SET_PASSWORD_TEXT}</Text>
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
                    // onPress={() => navigation.navigate(navigationStrings.FORGOT_PASSWORD)}
                    img={imagePath.forward}
                />
            </View>
        </SafeAreaView>
    );
};

// define your styles

//make this component available to the app
export default SetPassword;
