import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens';
import { AlertToast } from '../components';
import { PrivateRoutes } from './navigationNames/privateRoutes';
import { Color } from '../theme/colorTheme';
import BoardScreen from '../screens/board/boardScreen';

const { Navigator, Screen } = createNativeStackNavigator<
  Record<string, object | undefined>
>();

export function PrivateNavigation() {
  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: true,
          title: 'Lista de tableros',
          headerStyle: {
            backgroundColor: Color.palette.info,
          },
          headerTitleStyle: {
            color: Color.palette.white
          },
          statusBarColor: Color.palette.info
        }}
        initialRouteName={PrivateRoutes.HomeScreen}>
        <Screen
          name={PrivateRoutes.HomeScreen}
          component={HomeScreen as React.ComponentType<any>}
        />
        <Screen
          name={PrivateRoutes.BoardScreen}
          component={BoardScreen as React.ComponentType<any>}
          options={{
            headerShown: true,
            title: 'Board Name',
          }}
        />
      </Navigator>
      <AlertToast />
    </>
  );
}
