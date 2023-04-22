import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootRoutes } from './navigationNames/rootRoutes';
import { PrivateNavigation } from './privateNavigation';
import { PublicNavigation } from './publicNavigation';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { AbsoluteLoading } from '../components';

type RootStackParamList = {
  [RootRoutes.PrivateStackNavigation]: undefined;
  [RootRoutes.PublicStackNavigation]: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();


export function RootNavigator() {
  const { loading, token } = useSelector((state: RootState) => state.signIn);
  return (
    <>
      <AbsoluteLoading visible={loading} />
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!loading && token ? (
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
