import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/responsive";
import { Montserrat } from "../../theme/fonts";
import { Color } from "../../theme/colorTheme";

const styles = StyleSheet.create({
  boardsContainer: {
    flex: 1, 
    marginHorizontal: horizontalScale(20)
  },
  boardTitle: {
    fontFamily: Montserrat.Bold,
    fontSize: moderateScale(16),
    color: Color.palette.black,
    marginTop: verticalScale(15),
    marginBottom: verticalScale(5),
  }
})
export default styles; 
