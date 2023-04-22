import { IS_ANDROID } from "../../utils/constants";
import { STATUS_BAR_HEIGHT, verticalScale } from "../../utils/responsive";

export const StyleHandler = (bg?: string, bgSB?: string) => {
  let varianStyles;
  if (bg === 'transparent' && bgSB === 'transparent') {
    varianStyles = {
      backgroundColor: bg,
      height: verticalScale(STATUS_BAR_HEIGHT + 10),
      position: 'absolute',
      zIndex: 10,
      left: 0,
      right: 0,
      top: STATUS_BAR_HEIGHT + verticalScale(30),
      marginBottom: verticalScale(50),
    }
  } else if (bg === 'transparent') {
    varianStyles = {
      height: verticalScale(STATUS_BAR_HEIGHT + 10),
      backgroundColor: bg,
      position: 'absolute',
      zIndex: 10,
      left: 0,
      right: 0,
      top: STATUS_BAR_HEIGHT + verticalScale(30),
    }
  } else if (bgSB === 'transparent') {
    varianStyles = {
      height: IS_ANDROID ? STATUS_BAR_HEIGHT + verticalScale(45) : 118,
      backgroundColor: bg,
      top: STATUS_BAR_HEIGHT,
      paddingTop: verticalScale(20),
    }
  }
  else {
    varianStyles = {
      backgroundColor: bg,
      height: verticalScale(STATUS_BAR_HEIGHT + 10),
    }
  }
  return varianStyles
}