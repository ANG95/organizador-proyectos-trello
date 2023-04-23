import { View, FlatList } from 'react-native'
import React from 'react'
import { useBoardItems } from './hooks/useBoardItems'
import { Divider } from '../../components'
import styles from './styles'
import { NavigationPropsType } from '../../interfaces/interfaces'
import BoardColumn from './components/boardColumn/boardColumn'

const BoardScreen = ({ route }: NavigationPropsType) => {
  const { boardDataItems } = useBoardItems(route?.params.boardItemsId)
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
    </View>
  )
}

export default BoardScreen
