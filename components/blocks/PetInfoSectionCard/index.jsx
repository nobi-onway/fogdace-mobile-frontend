import React from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { COLORS } from '../../../constants'
import { Icon2D } from '../../elements'

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

const PetInfoSectionCard = ({data}) => {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <View style={styles.titleWrapper}>
                <View style={styles.iconWrapper}>
                <Icon2D name="pills" activated/>
                </View>
                <Text style={styles.mainText}>Weight</Text>
            </View>

            <Pressable style={styles.detailWrapper}>
                <Text style={styles.detailText}>Detail</Text>
                <Icon2D name="right"/>
            </Pressable>
            
        </View>

        <View>
            <NoData />
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
     backgroundColor: COLORS.white,
     paddingHorizontal: 4,
     paddingVertical: 8,
     borderRadius: 4
    },
    headerContainer: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8
    },
    titleWrapper:{
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
    },
    detailText:{
        color: COLORS.lightBlack
    },
    mainText:{
        fontWeight: 'bold'
    },
    addBtn:{
        borderRadius: 4,
        paddingHorizontal: 14,
        paddingVertical: 2,
        borderWidth: 1.5,
        borderColor: COLORS.tertiary,
        backgroundColor: COLORS.lightGray,
        width: "auto",
        marginHorizontal: 'auto',
    },
    detailWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    addBtnText:{
        color: COLORS.tertiary,
        fontWeight: 'bold'
    },
    centerHorizontalAndVertical: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8
    },
    noDataText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: COLORS.lightBlack
    },
    iconWrapper:{
        backgroundColor: COLORS.info,
        padding: 4,
        borderRadius: 4,
        width: 30
        
    },
    headerWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contentWrapper:{
        flex: 1
    }

})

export default PetInfoSectionCard
