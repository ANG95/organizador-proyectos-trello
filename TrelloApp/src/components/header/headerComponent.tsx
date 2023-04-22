import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SvgIcon } from '..'
import { StyleHandler } from './styleHandler';
import { horizontalScale, STATUS_BAR_HEIGHT, verticalScale } from '../../utils/responsive';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { signInSelector } from '../../screens/signIn/selectors/signInSelector';
import { BASE_URL } from '../../utils/constants';
import JpgImage from '../../assets/images/jpg';
import { Color } from '../../theme/colorTheme';
import { SvgIconTypes } from '../svgIcon/icons';
export interface rightOptionProps {
  action: () => void;
  iconName: SvgIconTypes;
}
interface HeaderProps {
  goBack?: () => void;
  bg?: string | 'transparent';
  bgSB?: string;
  title?: string;
  image?: string;
  rightOption?: rightOptionProps

}
export const Header = ({ goBack, bg, bgSB, title, rightOption, image }: HeaderProps) => {
  const { thumbnailImage } = useSelector(signInSelector)
  const leftButtonVisible = typeof goBack === 'function';
  const varianStyles: Object = StyleHandler(bg, bgSB)
  return (
    <View style={{ overflow: 'hidden', paddingBottom: verticalScale(1) }}>
      <View
        style={[{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: horizontalScale(12),
          marginBottom: STATUS_BAR_HEIGHT,
          shadowColor: '#000',
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.4,
          shadowRadius: 3,
          elevation: 5,
        }, varianStyles]}
      >

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {leftButtonVisible && (
            <TouchableOpacity onPress={goBack}>
              <SvgIcon icon='arrowLeft' widthScale={20} heightScale={20} color={Color.info}/>
            </TouchableOpacity>
          )}
          <Image
            source={image ? { uri: image } : { uri: `${BASE_URL}${thumbnailImage}` } || JpgImage.akiToyLogo}
            style={{
              width: verticalScale(35),
              height: verticalScale(35),
              borderRadius: verticalScale(50),
              marginLeft: horizontalScale(3),
            }}
          />
          <Text numberOfLines={1} style={styles.title}>{title}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
          }}
        >
          {rightOption?.action ?
            <TouchableOpacity onPress={rightOption.action}>
              <SvgIcon icon={rightOption.iconName} widthScale={20} heightScale={20} color={Color.info}/>
            </TouchableOpacity>
            : null}
        </View>
      </View>
    </View>
  )
}
