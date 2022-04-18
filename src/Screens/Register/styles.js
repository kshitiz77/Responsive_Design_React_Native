import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { moderateScale, moderateScaleVertical, scale } from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily'

// define your styles
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(24),
    },
    headingStyle:{
        fontSize:scale(22),
        fontFamily:fontFamily.mulishBold,
        color:colors.black,
        marginBottom:moderateScaleVertical(24),
        textTransform:'uppercase',
    },
    bottomView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScaleVertical(24)
    }
});
