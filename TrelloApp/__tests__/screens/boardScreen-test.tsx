import * as React from 'react';
import { act } from 'react-test-renderer';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import TestRenderWrapper from '../../src/utils/testRenderWrapper';
import { useBoardItems } from '../../src/screens/board/hooks/useBoardItems';
import { mockBoardsItemsData } from '../../__mocks__/mockBoardsData';
import BoardScreen from '../../src/screens/board/boardScreen';

const mockRoute = {
  params: {
    boardItemsId: 123,
    userId: 456,
  },
};

const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  dispatch: jest.fn(),
  popToTop: jest.fn(),
  push: jest.fn(),
  route: mockRoute,
}

const onPressAddCardButton = jest.fn();

jest.mock('../../src/screens/board/hooks/useBoardItems');

describe('BoardScreen', () => {

  const loadWrapper = async (initialState = {}) => {
    let wrapper;
    await act(() => {
      wrapper = TestRenderWrapper(<BoardScreen navigation={mockNavigation} />, initialState);
    });
    return wrapper;
  };

  beforeEach(() => {
    const mockUseBoardItemsList = useBoardItems as jest.MockedFunction<typeof useBoardItems>;
    mockUseBoardItemsList.mockReturnValue({ boardDataItems: mockBoardsItemsData });
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('render screen Text correctly', async () => {
    const { root }: any = await loadWrapper()
    const addNewCardText = root.findAllByType(Text).find((el: any) => el.props.children === 'Agregar card');
    expect(addNewCardText).toBeDefined();
  });

  it('renders correct number of item boards', async () => {
    const { root }: any = await loadWrapper()
    const flatList = root.findByType(FlatList);
    expect(flatList.props.data.length).toEqual(4);
  });

  it('should onPress add new card executing not(called) ', async () => {
    const { root }: any = await loadWrapper()
    const addNewItemButton = root.findAllByType(TouchableOpacity);
    addNewItemButton[0].props.onPress();
    expect(onPressAddCardButton).toHaveBeenCalledTimes(0);
  });
});
