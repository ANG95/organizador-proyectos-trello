import { Image, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Modal from 'react-native-modal';
import Lottie from 'lottie-react-native';
import LottieImg from '../../assets/lottie';
import JpgImage from '../../assets/images/jpg';
import { verticalScale, SCREEN_HEIGHT } from '../../utils/responsive';

interface AbsoluteLoadingProps {
  visible: boolean;
}

export const AbsoluteLoading = ({ visible }: AbsoluteLoadingProps) => {
  return (
    <Modal
      isVisible={visible}
      statusBarTranslucent
      animationIn="fadeIn"
      style={{ marginHorizontal: 0}}
      deviceHeight={SCREEN_HEIGHT}
      coverScreen
    >
      <View style={styles.centeredView}>
        <View style={styles.logoContainer}>
          <Image
            source={JpgImage.userDefault}
            style={{
              width: verticalScale(80),
              height: verticalScale(100),
            }}
          />
        </View>
        <View style={styles.iconContainer}>
          <Lottie
            source={LottieImg.loading}
            autoPlay
            loop
          />
        </View>
      </View>
    </Modal>
  );
};
