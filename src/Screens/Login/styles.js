// define your styles
import { scale, moderateScale, verticalScale, moderateScaleVertical } from '../../styles/responsiveSize'
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'space-between'
    },
    imgStyle: {
        height: moderateScale(200),
        width: "100%",
        // justifyContent: 'cent',
    },
    chooseLanguageStyle:{
        backgroundColor:colors.gray, 
        paddingHorizontal:moderateScale(20), 
        borderRadius:moderateScale(5), 
        marginVertical:moderateScaleVertical(12), 
        paddingVertical:moderateScaleVertical(5), 
        alignSelf:'flex-end'
    },
    chooseLanguageText:{
        color:colors.black, 
        fontSize:scale(14)
    },
    loginTextStyle: {
        fontFamily:fontFamily.mulishBold,
        marginVertical:moderateScaleVertical(12),
        color: colors.white,
        fontSize: scale(32),
        textTransform:'uppercase',
        alignSelf:'center'
    },
    mainStyle: {
        paddingTop: moderateScaleVertical(44),
        paddingHorizontal: moderateScale(24)
    },
    forgotView:{
        alignSelf:'flex-end',
        marginVertical:moderateScaleVertical(24),
    },
    forgotTextStyle:{
        fontFamily:fontFamily.mulishMedium,
        color:colors.themeColor,
        fontSize:scale(16),
    },
    authBtnContainer:{
        height:moderateScale(48),
        backgroundColor:colors.themeColor,
        borderRadius:moderateScale(4),
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row',
        marginTop:moderateScaleVertical(20)
    },
    authImgStyle:{
        width:moderateScale(30),
        height:moderateScale(30),
        borderRadius:moderateScale(30/2)
    },
    authTextStyle:{
        fontSize:scale(18),
        color:colors.white,
        fontFamily:fontFamily.mulishBold
    },
    bottomView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        // marginTop:moderateScale(72)
        marginBottom:moderateScale(40)
    },
    bottomTextStyle:{
        color:colors.grayC, 
        fontSize:scale(16),
        fontFamily:fontFamily.mulishRegular
    },
    joinNowTextStyle:{
        color:colors.black,
        fontSize:scale(16),
        fontFamily:fontFamily.mulishSemiBold
    },

    // modal style
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalContainerStyle:{
          backgroundColor:colors.white,
          paddingHorizontal:moderateScale(10),
          borderRadius:moderateScale(5)
      }
});
