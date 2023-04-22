import { StyleSheet } from "react-native";
import { Color } from "../../theme/colorTheme";
import { IS_IOS } from "../../utils/constants";
import { STATUS_BAR_HEIGHT } from "../../utils/responsive";

export const styling = (transparentStatusBar: boolean, isTabStack: boolean) =>
  StyleSheet.create({
    safeAreaContainer: {
      flex: 1,
      marginTop: transparentStatusBar ? -STATUS_BAR_HEIGHT : 0,
      paddingBottom: transparentStatusBar && IS_IOS && isTabStack ? -STATUS_BAR_HEIGHT : 0,
      backgroundColor: Color.backgroundPrimary,
    },
    scrollViewContent: {
      flexGrow: 1
    }
  });