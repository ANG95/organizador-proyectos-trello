import { StyleSheet } from "react-native";
import { Color } from "../../theme/colorTheme";
import { Montserrat } from "../../theme/fonts";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/responsive";

const OUTLINED_BASIC = 'outlined-basic';
const STANDARD = 'standard'


export const styling = (
  isFocused: boolean,
  type: string,
  iconRightValid: string | null | undefined,
  iconLeftValid: string | null | undefined,
  isInputTextArea: null | boolean,
  value: boolean | string
) => {
  let inputTextArea: {};
  if (isInputTextArea) {
    inputTextArea = {
      textAlignVertical: 'top',
      minHeight: verticalScale(70),
    }
  } else {
    inputTextArea = {
      height: type === OUTLINED_BASIC ? verticalScale(40) : verticalScale(21),
    }
  }
  const twoIcons = iconLeftValid && iconRightValid
  const notProvideIcons = !(!iconLeftValid && !iconRightValid)

  return StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
      paddingHorizontal: verticalScale(10),
      backgroundColor: isFocused ? Color.backgroundPrimary : type === STANDARD ? Color.backgroundPrimary : Color.backgroundInput,
      borderColor: type === OUTLINED_BASIC ? (isFocused || value ? Color.tertiaryText : Color.backgroundInput) : type === STANDARD ? Color.backgroundPrimary : Color.tertiaryText,
      ...(type === STANDARD && { borderBottomColor: Color.tertiaryText }),
      borderWidth: 1,
      borderRadius: type === STANDARD ? 0 : 50,
    },
    inputLabelContainer: {
      width: twoIcons ? '83%' : notProvideIcons ? '93%' : '100%',
      paddingVertical: type === OUTLINED_BASIC ? verticalScale(0) : verticalScale(4),
    },
    iconContainer: {
      justifyContent: "center",
      backgroundColor: 'dark'
    },
    input: {
      fontSize: moderateScale(14, 1),
      ...inputTextArea,
      ...(type !== OUTLINED_BASIC && { paddingVertical: 0 }),
      ...(type !== OUTLINED_BASIC && { paddingHorizontal: 0 }),
      color: type === OUTLINED_BASIC ? Color.palette.black : Color.primaryText,
      fontFamily: Montserrat.Medium,
      paddingHorizontal: horizontalScale(10),
      paddingVertical: 0
    },
    label: {
      color: Color.secondaryText,
      fontSize: moderateScale(13, 1),
      fontFamily: type === OUTLINED_BASIC ? Montserrat.Bold : Montserrat.Regular,
      textAlign: 'left',
      width: '100%',
      marginBottom: type === OUTLINED_BASIC ? verticalScale(5) : verticalScale(1),
      paddingLeft: type === OUTLINED_BASIC ? verticalScale(5) : verticalScale(0),
    },
    errorContainer: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: '100%'
    },
    errorText: {
      marginTop: verticalScale(2.5),
      color: Color.error,
      fontFamily: Montserrat.Regular,
      textAlign: 'left',
      fontSize: moderateScale(13, 1),
      marginLeft: horizontalScale(10)
    },
  })
};