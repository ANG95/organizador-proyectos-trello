import { Dimensions, NativeModules } from 'react-native';

const { StatusBarManager } = NativeModules;
const STATUS_BAR_HEIGHT = StatusBarManager.HEIGHT;

const SCREEN_WIDTH: number = Dimensions.get('screen').width;
const SCREEN_HEIGHT: number = Dimensions.get('screen').height;

const guidelineBaseWidth: number = 375;
const guidelineBaseHeight: number = 812;

const horizontalScale: any = (size: number) =>
  (SCREEN_WIDTH / guidelineBaseWidth) * size;

const verticalScale = (size: number) =>
  (SCREEN_HEIGHT / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor: number = 0.5): number => {
  return size + (horizontalScale(size) - size) * factor;
};

const NAVIGATION_BAR_HEIGHT = verticalScale(78);

export {
  verticalScale,
  moderateScale,
  horizontalScale,
  NAVIGATION_BAR_HEIGHT,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  STATUS_BAR_HEIGHT,
};
