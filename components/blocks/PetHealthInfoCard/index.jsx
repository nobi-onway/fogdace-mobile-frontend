import React from 'react'
import { View, Text } from 'react-native'
import Icon3D from '../../elements/Icon3D'

import styles from './style'

const PetHealthInfoCard = ({type, mainInfo, subInfo}) => {
  return (
    <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <Icon3D type={type}/>
        </View>
        <View>
          <Text style={styles.mainInfo}>{mainInfo}</Text>
        </View>
        <View>
          <Text style={styles.subInfo}>{subInfo}</Text>
        </View>
    </View>
  )
}

export default PetHealthInfoCard
