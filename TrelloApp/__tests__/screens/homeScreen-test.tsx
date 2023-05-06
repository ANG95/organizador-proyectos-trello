import * as React from 'react';
import { act } from 'react-test-renderer';
import { HomeScreen } from '../../src/screens';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import TestRenderWrapper from '../../src/utils/testRenderWrapper';
import { PrivateRoutes } from '../../src/navigation/navigationNames/privateRoutes';
import { useBoardsList } from '../../src/screens/home/hooks/useBoardList';
import { mockBoardsData } from '../../__mocks__/mockBoardsData';

export const navigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  dispatch: jest.fn(),
  popToTop: jest.fn(),
  push: jest.fn(),
}

jest.mock('../../src/screens/home/hooks/useBoardList');

describe('HomeScreen', () => {

  const loadWrapper = async (initialState = {}) => {
    let wrapper;
    await act(() => {
      wrapper = TestRenderWrapper(<HomeScreen navigation={navigation} />, initialState);
    });
    return wrapper;
  };

  beforeEach(() => {
    const mockUseBoardsList = useBoardsList as jest.MockedFunction<typeof useBoardsList>;
    mockUseBoardsList.mockReturnValue({ boardsData: mockBoardsData });
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', async () => {
    const { root }: any = await loadWrapper()
    const selectText = root.findAllByType(Text).find((el: any) => el.props.children === 'Seleciona un tablero:');
    expect(selectText).toBeDefined();
  });

  it('renders correct number of boards', async () => {
    const { root }: any = await loadWrapper()
    const flatList = root.findByType(FlatList);
    expect(flatList.props.data.length).toEqual(1);
  });

  it('navigates to BoardScreen on press', async () => {
    const { root }: any = await loadWrapper()
    const firstItem = root.findAllByType(TouchableOpacity)
    firstItem[0].props.onPress();
    expect(navigation.navigate).toHaveBeenCalledWith(PrivateRoutes.BoardScreen, { boardItemsId: '12' });
  });
});
