import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Divider, SvgIcon } from '../../../../components'
import { Boards } from '../../interface'

interface BoardColumnProps {
  item: Boards;
}

const BoardColumn = ({ item }: BoardColumnProps) => {
  return (
    <View style={styles.columnContainer}  >
      <Text style={styles.columnLabel}>{item.name}</Text>
      <Divider y={5} />
      <ScrollView
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
      >
        {item.boardItems.map((itemBoard) => (
          <View
            style={styles.cardItem}
            key={itemBoard.id}
          >
            <Text style={styles.cardLabel}>{itemBoard.name}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.addCardButton}        >
          <SvgIcon icon="circlePlus" widthScale={15} heightScale={18} />
          <Divider x={5} />
          <Text style={styles.cardLabel}>Agregar card</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default BoardColumn
