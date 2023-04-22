import { StyleSheet } from "react-native";
import { Color } from "../../theme/colorTheme";
import { Montserrat } from "../../theme/fonts";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/responsive";

export const styles = StyleSheet.create({
  basicStyle: {
    height: verticalScale(20),
    width: verticalScale(20),
    borderRadius: verticalScale(50),
    backgroundColor: Color.backgroundPrimary,
    marginTop: verticalScale(2.5),
    marginLeft: horizontalScale(3),
  },
  mainStyes: {
    borderRadius: verticalScale(50),
    backgroundColor: Color.primary,
    height: verticalScale(25),
    width: verticalScale(40),
  },
  label: {
    color: Color.secondaryText,
    fontSize: moderateScale(13, 1),
    fontFamily:  Montserrat.Regular,
    paddingLeft: verticalScale(5) ,
  }
})
