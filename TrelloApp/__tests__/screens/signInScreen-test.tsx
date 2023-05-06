import * as React from 'react';
import { act } from 'react-test-renderer';
import { Text } from 'react-native';
import TestRenderWrapper from '../../src/utils/testRenderWrapper';
import { SignInScreen } from '../../src/screens';

describe('BoardScreen', () => {

  const loadWrapper = async (initialState = {}) => {
    let wrapper;
    await act(() => {
      wrapper = TestRenderWrapper(<SignInScreen />, initialState);
    });
    return wrapper;
  };

  it('should text render in screen correctly', async () => {
    const { root }: any = await loadWrapper()
    const textComponent = root.findByType(Text);
    expect(textComponent.props.children).toBe('SignInScreen');
  });
});
