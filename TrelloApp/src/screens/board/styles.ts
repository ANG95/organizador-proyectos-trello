import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/responsive";
import { Montserrat } from "../../theme/fonts";
import { Color } from "../../theme/colorTheme";

const styles = StyleSheet.create({
  boardContainer: {
    flex: 1, 
    // marginBottom: horizontalScale(40)
    
  },
  boardTitle: {
    fontFamily: Montserrat.Bold,
    fontSize: moderateScale(16),
    color: Color.palette.black,
    marginTop: verticalScale(15),
    marginBottom: verticalScale(5),
  },



  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
})
export default styles; 
