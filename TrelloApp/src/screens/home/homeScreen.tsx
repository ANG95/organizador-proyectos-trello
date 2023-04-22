import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useBoardsList } from './hooks/useBoardList'
import BoardSelection from './components/boardSecction/boardSecction'
import styles from './styles'
import { PrivateRoutes } from '../../navigation/navigationNames/privateRoutes'
import { NavigationPropsType } from '../../interfaces/interfaces'

export const HomeScreen = ({ navigation: { navigate } }: NavigationPropsType) => {
  const { boardsData } = useBoardsList()

  return (
    <View style={styles.boardsContainer}>
      <Text style={styles.boardTitle} >Seleciona un tablero:</Text>
      <FlatList
        data={boardsData}
        renderItem={({ item }) => <BoardSelection board={item} navigate={() =>
          navigate(PrivateRoutes.BoardScreen,
            { boardItemsId: item.id })}
        />}
        keyExtractor={(item) => item?.id.toString()}
      />
    </View>
  )
}
