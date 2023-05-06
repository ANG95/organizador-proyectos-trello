jest.useFakeTimers();
jest.mock('redux-flipper', () => {
    const createDebugger = jest.fn();
    const middleware = { push: jest.fn() };
    createDebugger.mockReturnValue(middleware);
    return { default: createDebugger };
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('@react-navigation/native-stack')
jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(),
        })
    }
})


jest.mock('react-native-toast-message', () => ({
    show: jest.fn(),
    hide: jest.fn()
  }));
  
jest.mock('react-native-modal', () => 'react-native-modal');
jest.mock('react-native-linear-gradient', () => 'LinearGradient');
