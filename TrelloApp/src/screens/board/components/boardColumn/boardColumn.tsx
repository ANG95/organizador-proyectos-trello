import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Divider, SvgIcon } from '../../../../components'
import { Boards } from '../../interface'

interface BoardColumnProps {
  item: Boards;
}

const BoardColumn = ({ item }: BoardColumnProps) => {
  const handleAddCard=()=>{  }
  return (
    <View style={styles.columnContainer}  >
      <Text style={styles.columnLabel}>{item.name}</Text>
      <Divider y={5} />
      <View>
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
          <TouchableOpacity style={styles.addCardButton} onPress={()=>handleAddCard()}>
            <SvgIcon icon="circlePlus" widthScale={15} heightScale={18} />
            <Divider x={5} />
            <Text style={styles.cardLabel}>Agregar card</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}

export default BoardColumn
