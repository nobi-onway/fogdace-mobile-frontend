import { View, Text, Pressable } from 'react-native'
import { Icon2D } from '../../elements'

import styles from './style'

const NoData = () => {
    return(
        <View style={styles.centerHorizontalAndVertical}>  
                <Text style={styles.noDataText}>Hiện tại chưa có dữ liệu</Text>
                    <Icon2D name={"born"}/>
                <Pressable style={styles.addBtn}>
                    <Text style={styles.addBtnText}>Thêm</Text>
                </Pressable>
        </View>
    )
}

const PetInfoSectionCard = ({iconName, title, children=null}) => {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <View style={styles.titleWrapper}>
                <View style={styles.iconWrapper}>
                <Icon2D name="pills" activated/>
                </View>
                <Text style={styles.mainText}>Cân nặng</Text>
            </View>
            <Pressable style={styles.detailWrapper}>
                <Text style={styles.detailText}>Chi tiết</Text>
                <Icon2D name="right"/>
            </Pressable>
        </View>

        <View>
            {children ? children : <NoData />}
        </View>
    </View>
  )
}

export default PetInfoSectionCard
