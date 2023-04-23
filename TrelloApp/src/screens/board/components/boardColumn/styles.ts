import { StyleSheet } from "react-native";
import { Color } from "../../../../theme/colorTheme";
import { horizontalScale, moderateScale, verticalScale } from "../../../../utils/responsive";
import { Montserrat } from "../../../../theme/fonts";

const styles = StyleSheet.create({
  columnContainer: {
    padding: verticalScale(16),
    marginHorizontal: horizontalScale(8),
    width: horizontalScale(140),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Color.disabled,
    backgroundColor: Color.palette.greyFourth,
    marginBottom: horizontalScale(60),
    alignSelf: 'flex-start'
  },
  columnLabel: {
    fontFamily: Montserrat.Bold,
    fontSize: moderateScale(14),
    color: Color.palette.black,
  },
  cardItem: {
    backgroundColor: Color.backgroundPrimary,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  cardLabel: {
    fontFamily: Montserrat.Regular,
    fontSize: moderateScale(12),
    color: Color.palette.black,
  },
  addCardButton: {
    borderRadius: 10,
    marginVertical: verticalScale(5),
    flexDirection: "row",
  }
})
export default styles
