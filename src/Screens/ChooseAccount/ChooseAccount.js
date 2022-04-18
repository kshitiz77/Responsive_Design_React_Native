//import liraries
import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import { moderateScale } from '../../styles/responsiveSize';
import { styles } from './styles';
// create a component
const ChooseAccount = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{paddingHorizontal:moderateScale(24)}}>
      <HeaderComp />
    </View>
    <View style={styles.container}>
      <Text style={styles.headingText}>{strings.CHOOSE_YOUR_ACCOUNT_TYPE}</Text>
      <View style={{alignItems:'center'}}>
        <Image 
        style={styles.imageStyle}
        source={{uri:'https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/house-icon.png'}} />
        <Text style={styles.textStyle}>{strings.AGENCY}</Text>
      </View>
      <View style={{alignItems:'center'}}>
        <Image 
        style={styles.imageStyle}
        source={imagePath.avtarImg} />
        <Text style={styles.textStyle}>{strings.FREELANCER}</Text>
      </View>
      <ButtonComp 
      btnText={strings.CONTINUE} 
      btnStyle={{width:'100%'}}
      onPress={() => navigation.navigate(navigationStrings.REGISTER)}
      />
    </View>
    </SafeAreaView>
  );
};



//make this component available to the app
export default ChooseAccount;
