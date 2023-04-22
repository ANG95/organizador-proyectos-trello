import { StyleSheet } from "react-native";
import { Color } from "../../theme/colorTheme";
import { Montserrat } from "../../theme/fonts";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/responsive";

export const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    backgroundColor: Color.backgroundPrimary,
    borderRadius: verticalScale(10),
    paddingTop: verticalScale(10),
    marginHorizontal: horizontalScale(30),
  },
  label: {
    textAlign: 'center',
    color: Color.palette.black,
    fontFamily: Montserrat.Bold,
    fontSize: moderateScale(16, 2),
    paddingHorizontal: horizontalScale(10),
  },
  description: {
    textAlign: 'center',
    color: Color.palette.black,
    fontSize: moderateScale(14, 2),
    fontFamily: Montserrat.Medium,
  },
  dividerBorder: {
    borderBottomWidth: 2,
    borderColor: Color.separatorBorder,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#007AFF',
    fontSize: moderateScale(16),
    fontFamily: Montserrat.Medium,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(15),
    alignContent: 'center'
  }
});