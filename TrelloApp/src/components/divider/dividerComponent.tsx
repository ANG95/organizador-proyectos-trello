import { View } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../../utils/responsive';
import { Color } from '../../theme/colorTheme';

interface DividerProps {
  y?: number;
  x?: number;
  border?: boolean;
}
export const Divider = ({ y = 0, x = 0, border = false }: DividerProps) => {
  return (
    <View style={{
      marginVertical: border ? verticalScale(y) : verticalScale(y),
      width: !border ? horizontalScale(x) : '100%',
      borderColor: Color.disabled,
      borderWidth: !border ? 0 : 1
    }} />
  )
}