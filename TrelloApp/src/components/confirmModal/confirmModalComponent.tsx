import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { styles } from './styles';
import { horizontalScale } from '../../utils/responsive';
import { Divider } from '../divider/dividerComponent';
import { Color } from '../../theme/colorTheme';

interface ConfirmModalProps {
  title?: string;
  description: string;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
}

export const ConfirmModal = ({
  title,
  description,
  isOpen,
  onConfirm,
  onCancel,
}: ConfirmModalProps) => (
  <Modal
    isVisible={isOpen}
    animationIn="slideInUp"
    animationOut="slideOutDown"
    animationOutTiming={1000}
    style={styles.modal}
    onBackdropPress={onCancel}
    coverScreen>
    <View style={styles.container}>
      <Divider y={5} />
      <View style={{ paddingHorizontal: horizontalScale(10) }}>
        <Text style={styles.label}>{title}</Text>
        <Divider y={5} />
        <Text style={styles.description}>{description}</Text>
      </View>
      <Divider y={5} />
      <View style={styles.dividerBorder} />
      <View style={styles.buttonsContainer}>
        {onCancel && (
          <TouchableOpacity style={styles.button} onPress={onCancel}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={[
            styles.button,
            {
              borderLeftWidth: 2,
              borderLeftColor: Color.separatorBorder,
            },
          ]}
          onPress={onConfirm}>
          <Text style={styles.buttonText}>{onCancel ? 'Si' : 'Continuar'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);
