import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import store from '../redux/store';

function TestRenderWrapper(component: JSX.Element, initialState?: any|{} ) {

  return TestRenderer.create(
    <Provider store={store}>
      <NavigationContainer>
        {component}
      </NavigationContainer>
    </Provider>
  );
}

export default TestRenderWrapper;
