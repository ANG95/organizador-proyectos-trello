import React, { useState } from "react";
import {
  View,
  TextInput as TextInputRN,
  Text,
  KeyboardType,
  TouchableOpacity,
} from "react-native";
import { Color } from "../../theme/colorTheme";
import { verticalScale } from "../../utils/responsive";
import { SvgIconTypes } from "../svgIcon/icons";
import { SvgIcon } from "../svgIcon/svgIconComponent";
import { styling } from "./styles";

interface TextInputProps {
  label?: string;
  iconLeft?: SvgIconTypes;
  iconRight?: SvgIconTypes;
  error?: string | null;
  value: string;
  onChange: (s: string) => void;
  keyboardType?: KeyboardType,
  placeholder?: string;
  onSubmitEditing?: () => void;
  disabled?: boolean;
  type?: 'outlined-basic' | 'standard'
  maxLength?: number;
  handleBlur?: () => void
  numberOfLines?: number;
  isTouch?: () => void;
  disablePaste?: boolean;
}

const OUTLINED_BASIC = 'outlined-basic';

export const TextInput = ({ label, iconLeft, onChange, error,
  value, iconRight, keyboardType, placeholder, onSubmitEditing,
  disabled = true, maxLength, type = OUTLINED_BASIC, handleBlur,
  numberOfLines = 0, isTouch, disablePaste = false }: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const isInputPassword = iconLeft === "padlock"
  const [viewCharters, setViewCharters] = useState(isInputPassword);

  const onBlurHandler = () => {
    if (value === "") setIsFocused(false)
  };

  const handleViewPassword = () => {
    if (isInputPassword) {
      setViewCharters(!viewCharters)
    }
  }
  const errorValid = error ? true : false
  const handleBlurEvent = () => {
    handleBlur && handleBlur();
    onBlurHandler();
    setIsFocused(false);
  }
  const inputTypeTextArea = () => {
    let isTextArea;
    if (numberOfLines > 0) {
      isTextArea = {
        multiline: true,
        numberOfLines: numberOfLines,
      }
    }
    return isTextArea
  }

  const styles = styling(
    isFocused,
    type,
    (iconRight || error),
    iconLeft,
    numberOfLines > 0,
    !(value === ''));

  return (
    <>
      {type === OUTLINED_BASIC && label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.container}>
        {iconLeft && (
          <View style={styles.iconContainer}>
            <SvgIcon
              icon={iconLeft}
              widthScale={25}
              heightScale={25}
            />
          </View>
        )}
        <View style={styles.inputLabelContainer} >
          {type !== OUTLINED_BASIC && <Text style={styles.label}>{label}</Text>}
          <TextInputRN
            autoCapitalize="none"
            style={styles.input}
            value={value}
            onChangeText={(e) => onChange(e)}
            editable={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => handleBlurEvent()}
            placeholder={placeholder}
            blurOnSubmit
            keyboardType={keyboardType || 'default'}
            secureTextEntry={viewCharters}
            onSubmitEditing={onSubmitEditing}
            maxLength={maxLength}
            onChange={isTouch && (() => isTouch())}
            contextMenuHidden={disablePaste}
            placeholderTextColor={Color.tertiaryText}
            {...inputTypeTextArea()}
          />
        </View>
        
        {isInputPassword ?
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => handleViewPassword()}
            disabled={!isInputPassword}
          >
            <SvgIcon
              icon={
                viewCharters ?
                  'openEye' :
                  'closedEye'
              }
              width={verticalScale(isInputPassword ? 30 : 30)}
              height={verticalScale(isInputPassword ? 30 : 20)}
            />
          </TouchableOpacity>
          : iconRight || error ?
            <View style={styles.iconContainer}>
              <SvgIcon
                // icon={
                //   !isInputPassword ?
                //     iconRight :
                //     viewCharters ?
                //       'openEye' :
                //       'closedEye'
                // }
                icon={error ? 'close' : iconRight}
                width={verticalScale(isInputPassword ? 30 : 30)}
                height={verticalScale(isInputPassword ? 30 : 20)}
              />
            </View>
            : null
        }
      </View>
      {errorValid && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </>
  );
};
