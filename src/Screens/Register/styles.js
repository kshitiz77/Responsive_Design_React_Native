import { scale, moderateScale, verticalScale, moderateScaleVertical } from '../../styles/responsiveSize'
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

// define your styles
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(24),
    },
    headingStyle:{
        fontSize:scale(22),
        fontWeight:'600',
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
