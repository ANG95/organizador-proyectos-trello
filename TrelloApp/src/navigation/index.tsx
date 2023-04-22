import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootRoutes } from './navigationNames/rootRoutes';
import { PrivateNavigation } from './privateNavigation';
import { PublicNavigation } from './publicNavigation';

type RootStackParamList = {
  [RootRoutes.PrivateStackNavigation]: undefined;
  [RootRoutes.PublicStackNavigation]: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const token = null;
  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!token ? (
          <Screen
            name={RootRoutes.PrivateStackNavigation}
            component={PrivateNavigation}
          />
        ) : (
          <Screen
            name={RootRoutes.PublicStackNavigation}
            component={PublicNavigation}
          />
        )}
      </Navigator>
    </>
  );
}
