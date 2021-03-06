import { scale, moderateScale, verticalScale, moderateScaleVertical } from '../../styles/responsiveSize'
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';

// define your styles
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal:moderateScale(24),
      justifyContent:'space-between',
      alignItems:'center'
    },
    headingText:{
      fontSize:scale(24),
      textTransform:'uppercase',
      fontFamily:fontFamily.mulishBold,
      color:colors.black,
      textAlign:'center',
      marginHorizontal:moderateScale(25)
    },
    imageStyle:{
      height:moderateScale(140),
      width:moderateScale(140),
      borderRadius:moderateScale(140/2)
    },
    textStyle:{
      fontSize:scale(20),
      fontFamily:fontFamily.mulishMedium,
      color:colors.black,
      marginTop:moderateScale(5)
    }
  });
