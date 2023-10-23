import { View, Text, Pressable } from 'react-native'
import { Icon2D } from '../../elements'

import styles from './style'

const types = {
    pills: {
        name: "pills",
    },
}

const NoData = () => {
    return(
        <View style={styles.centerHorizontalAndVertical}>  
                <Text style={styles.noDataText}>Hiện tại chưa có dữ liệu</Text>
                    <Icon2D name="born"/>
                <Pressable style={styles.addBtn}>
                    <Text style={styles.addBtnText}>Thêm</Text>
                </Pressable>
        </View>
    )
}

const PetInfoSectionCard = ({iconName, title, children=null}) => {
    const icon = types[iconName].name
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <View style={styles.titleWrapper}>
                <View style={styles.iconWrapper}>
                <Icon2D name={icon}/>

                </View>
                <Text style={styles.mainText}>{title}</Text>
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
