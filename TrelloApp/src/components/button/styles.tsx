import { StyleSheet } from "react-native";
import { Color } from "../../theme/colorTheme";
import { Montserrat } from "../../theme/fonts";
import { spacing } from "../../theme/spacingTheme";
import { moderateScale, verticalScale } from "../../utils/responsive";

export const styling = (disabled: boolean) =>
  StyleSheet.create({
    buttonContainer: {
      padding: verticalScale(spacing[3]),
      borderRadius: 10,
      width: '100%',
      alignItems: 'center',
      marginVertical: verticalScale(spacing[2]),
      borderWidth: disabled ? 0 : 2,
      borderColor: disabled ? Color.disabled : Color.primary,
    },
    buttonText: {
      fontSize: moderateScale(14, 1),
      fontFamily: Montserrat.Bold,
    },
  });