import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { styling } from './styles'
import { Color } from '../../theme/colorTheme';

interface ButtonProps {
  disabled?: boolean;
  label?: string;
  onPress: () => void;
  mode: 'contained' | 'outlined' | 'text';
}

export const Button = ({ disabled = false, label, onPress, mode = 'contained' }: ButtonProps) => {
  let colorBackground;
  let labelStyles;
  if (mode === 'contained') {
    colorBackground = {
      backgroundColor: disabled ? Color.disabled : Color.primary,
      borderWidth: 2,
    }
    labelStyles = {
      color: disabled ? Color.tertiaryText : Color.backgroundPrimary,
    }
  } else if (mode === 'outlined') {
    colorBackground = {
      backgroundColor: Color.backgroundPrimary,
      borderWidth: 2,
      borderColor: Color.primary,
    }
    labelStyles = {
      color: disabled ? Color.tertiaryText : Color.primary,
    }
  } else if (mode === 'text') {
    colorBackground = {
      backgroundColor: Color.backgroundPrimary,
      borderWidth: 0
    }
    labelStyles = {
      color: disabled ? Color.tertiaryText : Color.primary,
    }
  }
  const styles = styling(disabled);

  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { ...colorBackground }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, { ...labelStyles }]}>{label}</Text>
    </TouchableOpacity>
  )
}