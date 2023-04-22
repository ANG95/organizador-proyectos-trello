import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { RootNavigator } from './navigation';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <NavigationContainer >
      <RootNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
