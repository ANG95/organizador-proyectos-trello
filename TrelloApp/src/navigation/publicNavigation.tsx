import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '../screens';
import { PublicRoutes } from './navigationNames/publicRoutes';

const { Navigator, Screen } = createNativeStackNavigator<
  Record<string, object | undefined>
>();

export function PublicNavigation(): JSX.Element {

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen
        name={PublicRoutes.SignInScreen}
        component={SignInScreen as React.ComponentType<any>}
      />
    </Navigator>
  );
}
