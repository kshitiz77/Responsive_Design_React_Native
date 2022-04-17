// define your styles
import { scale, moderateScale, verticalScale, moderateScaleVertical } from '../../styles/responsiveSize'
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'space-between'
    },
    imgStyle: {
        height: moderateScale(200),
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginTextStyle: {
        color: colors.white,
        fontSize: scale(32),
        fontWeight: 'bold'
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
        color:colors.themeColor,
        fontSize:scale(16),
        fontWeight:'400'
    },
    bottomView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        // marginTop:moderateScale(72)
        marginBottom:moderateScale(40)
    },
    joinNowTextStyle:{
        color:colors.black,
        fontSize:scale(16),
        fontWeight:'600'
    }
});
