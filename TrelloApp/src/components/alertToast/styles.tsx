import { StyleSheet } from "react-native";
import { Color } from "../../theme/colorTheme";
import { spacing } from "../../theme/spacingTheme";
import { moderateScale, verticalScale } from "../../utils/responsive";

export const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: Color.primaryText,
    borderRadius: 15,
    marginHorizontal: verticalScale(23),
  },
  textColor: {
    color: Color.backgroundPrimary,
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Regular',
  },
  textContainer: {
    padding: verticalScale(20),
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems:'center'
  },
  iconContainer: {
    paddingRight: spacing[2]
  },
  
});