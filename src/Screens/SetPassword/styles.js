import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, scale } from '../../styles/responsiveSize';

// define your styles
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(24),
    },
    headingText:{
        fontSize:scale(24),
        fontFamily:fontFamily.mulishBold,
        color:colors.black,
        textAlign:'center',
        marginTop:moderateScaleVertical(54)
    },
    descText:{
        fontSize:scale(16),
        fontFamily:fontFamily.mulishRegular,
        textAlign:'center',
        marginVertical:moderateScaleVertical(12)
    },
    userPhoneNumber:{
        fontSize:scale(16),
        fontFamily:fontFamily.mulishBold,
        color:colors.black,
        textAlign:'center'
    },
    btnStyle:{
        width:moderateScale(56),
        height:moderateScale(56),
        borderRadius:moderateScale(56/2),
        alignSelf:'flex-end'
    }
});
