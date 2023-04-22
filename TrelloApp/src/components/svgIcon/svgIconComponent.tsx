import React from 'react';
import { SvgXml } from 'react-native-svg';
import { SvgIconProps } from './svgIconProps';
import { icons } from './icons';
import { verticalScale } from '../../utils/responsive';

export function SvgIcon(props: SvgIconProps) {
  const { width, widthScale, height, heightScale, icon, color } = props;
  const wi = width ? width : verticalScale(widthScale || 100);
  const he = height ? height : verticalScale(heightScale || 100);
  const colorExists = {
    ...(color && { fill: color }),
  };
  return <SvgXml xml={icons[icon!]} width={wi} height={he} {...colorExists} />;
}
