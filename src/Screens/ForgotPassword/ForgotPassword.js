//import liraries
import React, { useEffect, useState } from 'react';
import { Keyboard, SafeAreaView, Text, View } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import TextInputWithLables from '../../Components/TextInputWithLables';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import { moderateScaleVertical } from '../../styles/responsiveSize';
import { styles } from './styles';

// create a component
const ForgotPassword = ({ navigation }) => {
    const [keyboardHeight , setKeyboardHeight] = useState(0);

    useEffect(() =>{
        const keyboardDiDShowListener = Keyboard.addListener('keyboardDiDShow', (event)=>{
            console.log('event trigger on show event' ,  event);
            setKeyboardHeight(event.endCoordinates.height - 336)
        })
        const keyboardDiDHideListener = Keyboard.addListener('keyboardDiDHide', (event)=>{
            console.log('event trigger on show event' ,  event);
            setKeyboardDiDShowListener(0)
        });
        return () =>{
            keyboardDiDHideListener.remove()
            keyboardDiDShowListener.remove()
        }
        
    })
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <HeaderComp />
                <View style={{flex:1}}>
                    <View style={{flex:0.2, alignItems:'center', justifyContent:'center'}}>
                        <Text>LOCK ICON</Text>
                    </View>
                    <View style={{flex:0.4}}>
                        <Text style={styles.headingText}>{strings.FORGOT_PASSWORD_HEADING}</Text>
                        <Text style={styles.descText}>{strings.FORGOT_PASSWORD_DESC}</Text>
                    </View>
                    <View style={{flex:0.4, marginBottom: keyboardHeight}}>
                        <TextInputWithLables
                            placeholder={strings.ENTER_YOUR_EMAIL}
                            label={strings.EMAIL_ADDRESS}
                            inputStyle={{ marginBottom: moderateScaleVertical(28), }}
                            keyboardType='email-address'
                        />
                        <ButtonComp
                            btnText={strings.SEND}
                            onPress={() => navigation.navigate(navigationStrings.SET_PASSWORD)}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

// define your styles

//make this component available to the app
export default ForgotPassword;
