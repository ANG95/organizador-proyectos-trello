import { View, FlatList, Animated, PanResponder } from 'react-native'
import React, { useRef } from 'react'
import { useBoardItems } from './hooks/useBoardItems'
import { Divider } from '../../components'
import styles from './styles'
import { NavigationPropsType } from '../../interfaces/interfaces'
import BoardColumn from './components/boardColumn/boardColumn'

const BoardScreen = ({ route }: NavigationPropsType) => {
  const { boardDataItems } = useBoardItems(route?.params.boardItemsId)
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;

  return (
    <View style={styles.boardContainer}>
      <View>
        <Divider y={10} />
        <FlatList
          data={boardDataItems.lists}
          renderItem={({item}) => <BoardColumn item={item}/>}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>

      {/* <View style={{}}>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Animated.View
          style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
          }}
          {...panResponder.panHandlers}>
          <View style={styles.box} />
        </Animated.View>
      </View> */}
    </View>
  )
}

export default BoardScreen
