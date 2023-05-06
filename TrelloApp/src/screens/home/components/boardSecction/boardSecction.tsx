import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import ArrowRightIcon from '../../../../assets/images/svg/ArrowRight.svg'
import LinearGradient from 'react-native-linear-gradient'
import { formatDate } from '../../../../utils/date'
import { Boards } from '../../../board/interface'

interface BoardSectionProps {
  board: Boards | any;
  navigate: () => void;
}

const BoardSection = ({ board, navigate }: BoardSectionProps) =>(
    <TouchableOpacity onPress={navigate}>
      <View style={styles.sectionContainer}>
        <LinearGradient
          colors={[board?.prefs?.backgroundTopColor, board?.prefs?.backgroundBottomColor]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientColor}
        />
        <View style={styles.cardContainer}>
          <View>
            <Text style={styles.boardNameText}>{board.name}</Text>
            <Text>
              <Text style={styles.dateLabel}>Actualizado el: </Text>
              <Text style={styles.dateText}>{formatDate(board.dateLastActivity)}</Text>
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <ArrowRightIcon />
          </View>
        </View>

      </View>
    </TouchableOpacity>
)

export default BoardSection
