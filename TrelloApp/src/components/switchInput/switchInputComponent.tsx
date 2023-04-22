import React, { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity, Easing, View, Text } from 'react-native';
import { Color } from '../../theme/colorTheme';
import { verticalScale } from '../../utils/responsive';
import { styles } from './styles';

interface SwitchInputProps {
  onChange: () => void;
  isOn: boolean;
  label?: string;
}

export const SwitchInput = ({ onChange, isOn, label }: SwitchInputProps) => {
  const positionButton = useRef(new Animated.Value(0)).current;

  const startAnimToOff = () => {
    Animated.timing(positionButton, {
      toValue: 0,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: false
    }).start()
  };

  const startAnimToOn = () => {
    Animated.timing(positionButton, {
      toValue: 1,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: false
    }).start()
  };

  const positionInterPol = positionButton.interpolate({ inputRange: [0, 1], outputRange: [0, verticalScale(15)] })

  const backgroundColorAnim = positionButton.interpolate({ inputRange: [0, 1], outputRange: ["#8A9199", Color.primary] })

  useEffect(() => {
    if (isOn) startAnimToOn(); else startAnimToOff();
  }, [isOn])


  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onChange} >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Animated.View style={[styles.mainStyes, {
          backgroundColor: backgroundColorAnim
        }]}
        >
          <Animated.View style={[styles.basicStyle, {
            transform: [{ translateX: positionInterPol }]
          }]} />
        </Animated.View>
        {label ? <Text style={styles.label}>{label}</Text> : null}
      </View>
    </TouchableOpacity>
  );
}