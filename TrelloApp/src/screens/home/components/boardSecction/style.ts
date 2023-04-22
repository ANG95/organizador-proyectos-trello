import { StyleSheet } from "react-native";
import { Color } from "../../../../theme/colorTheme";
import { moderateScale, verticalScale } from "../../../../utils/responsive";
import { Montserrat } from "../../../../theme/fonts";

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: verticalScale(12),
    borderRadius: verticalScale(10),
    backgroundColor: Color.palette.white,
    shadowColor: Color.palette.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardContainer:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: verticalScale(10),
  },
  iconContainer: {
    justifyContent: 'center'
  },
  gradientColor: {
    borderTopLeftRadius: verticalScale(10),
    borderTopRightRadius: verticalScale(10),
    height: verticalScale(10), 
    width: '100%'
  },
  boardNameText: {
    color: Color.palette.info,
    fontFamily: Montserrat.Black,
    fontSize: moderateScale(16)
  },
  dateLabel:{
    color: Color.palette.info,
    fontFamily: Montserrat.Medium,
    fontSize: moderateScale(14),
  },
  dateText:{
    color: Color.palette.black,
    fontFamily: Montserrat.Medium,
    fontSize: moderateScale(14),
    paddingTop: verticalScale(25)
  }
})
export default styles
