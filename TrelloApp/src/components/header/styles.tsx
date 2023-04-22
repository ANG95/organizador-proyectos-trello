import { StyleSheet } from "react-native";
import { Color } from "../../theme/colorTheme";
import { Montserrat } from "../../theme/fonts";
import { horizontalScale, moderateScale } from "../../utils/responsive";

export const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: Color.palette.greyPrimary,
    justifyContent: 'center',
    flex: 1,
    opacity: 0.8,
  },
  iconContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: Montserrat.Bold,
    fontSize: moderateScale(14, 2),
    color: Color.secondaryText,
    textAlign: 'left',
    marginLeft: horizontalScale(10)
  },
});