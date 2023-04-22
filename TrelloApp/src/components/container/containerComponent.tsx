import { KeyboardAvoidingView, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { styling } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context';
import { IS_IOS } from '../../utils/constants';
import { Color } from '../../theme/colorTheme';
import { Header, rightOptionProps } from '..';

interface ContainerProps {
  children?: React.ReactNode;
  withInput?: boolean;
  isScrollable?: boolean;
  bgSB?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
  goBack?: () => void;
  headerTitle?: string;
  headerPhoto?: string;
  headerBg?: string;
  isTabStack?: boolean;
  rightOption?: rightOptionProps
}
export const Container = ({ children,
  withInput = false,
  isScrollable = false,
  bgSB = 'transparent',
  barStyle = "dark-content",
  headerTitle,
  headerPhoto,
  headerBg = Color.backgroundPrimary,
  goBack,
  isTabStack = false,
  rightOption,
}: ContainerProps) => {
  const isTransparent = bgSB === 'transparent'
  const styles = styling(isTransparent, isTabStack);

  return (
    <>
      <StatusBar
        backgroundColor={bgSB}
        barStyle={barStyle}
        translucent={isTransparent}
      />
      <SafeAreaView style={styles.safeAreaContainer}>
        <KeyboardAvoidingView
          enabled={withInput}
          style={styles.safeAreaContainer}
          behavior={IS_IOS ? 'padding' : undefined}
        >
          {headerTitle && (
            <Header
              goBack={goBack}
              bg={headerBg}
              bgSB={bgSB}
              title={headerTitle}
              rightOption={rightOption}
              image={headerPhoto}
            />
          )}
          {
            isScrollable ? (
              <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
              >
                {children}
              </ScrollView>
            )
              : children
          }
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  )
}