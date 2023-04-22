import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../utils/responsive";

export const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  iconContainer: {
    height: verticalScale(200),
  },
  logoContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: verticalScale(300),
  }
});