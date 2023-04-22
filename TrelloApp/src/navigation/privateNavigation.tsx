import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens';
import { AlertToast } from '../components';
import { PrivateRoutes } from './navigationNames/privateRoutes';

const { Navigator, Screen } = createNativeStackNavigator<
  Record<string, object | undefined>
>();

export function PrivateNavigation() {
  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={PrivateRoutes.HomeScreen}>
        <Screen
          name={PrivateRoutes.HomeScreen}
          component={HomeScreen as React.ComponentType<any>}
        />
      </Navigator>
      <AlertToast />
    </>
  );
}
