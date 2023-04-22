import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { SvgIcon } from '../'

interface AlertToastProps {
  message: string;
  icon: string;
}

import ToastDefault from 'react-native-toast-message';

export enum ToastType {
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
}

export function handlerOnToast(type: ToastType, message: string = 'Procesado') {
  ToastDefault.show({
    type,
    props: { message },
    position: "bottom"
  });
}

const BaseToast = ({ message, icon }: AlertToastProps) => (
  <TouchableOpacity style={styles.centeredView}>
    <View style={styles.textContainer}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <Text style={styles.textColor}>
        {message}
      </Text>
    </View>
  </TouchableOpacity>
);

const toastConfig = () => ({
  success: ({ props }: any) => (
    <BaseToast message={props.message} icon={
      <SvgIcon
        icon='checkCircle'
        widthScale={20}
        heightScale={20}
      />
    } />
  ),

  error: ({ props }: any) => (
    <BaseToast message={props.message} icon={
      <SvgIcon
        icon='closeCircle'
        widthScale={20}
        heightScale={20}
      />
    } />
  ),

  warning: ({ props }: any) => (
    <BaseToast message={props.message} icon={
      <SvgIcon
        icon='warning'
        widthScale={20}
        heightScale={20}
      />
    } />
  ),
});
export const AlertToast = () => (
  <ToastDefault config={toastConfig()} />
);