import { ViewStyle } from 'react-native';
import { SvgIconTypes } from './icons';

export interface SvgIconProps {
  /**
   * Icon width
   */

  width?: number;

  /**
   * Icon width scale
   */

  widthScale?: number;

  /**
   * Icon height
   */

  height?: number;

  /**
   * Icon height scale
   */

  heightScale?: number;

  /**
   * Style overrides for the icon container
   */

  containerStyle?: ViewStyle;

  /**
   * The name of the icon
   */

  icon?: SvgIconTypes;

  /**
   * The color of the icon
   */
  color?: string;
}
