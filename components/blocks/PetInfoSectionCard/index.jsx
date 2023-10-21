import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { COLORS } from '../../../constants'

const NoData = () => {
    return(
        <View style={styles.centerHorizontalAndVertical}>  
                <Text>Hiện tại chưa có dữ liệu</Text>
                <Pressable style={styles.addBtn}>
                    <Text style={styles.addBtnText}>Thêm</Text>
                </Pressable>
        </View>
    )
}

const PetInfoSectionCard = ({data}) => {
  return (
    <View style={styles.container}>
        <View></View>

        <View>
            <NoData />
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'red'
    },
    noDataText:{

    },
    addBtn:{
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderWidth: 1.5,
        borderColor: COLORS.tertiary,
        backgroundColor: COLORS.lightGray,
        width: "auto",
        alignSelf: 'flex-start'
    },
    addBtnText:{
        color: COLORS.tertiary,
        fontWeight: 'bold'
    },
    centerHorizontalAndVertical: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    
    }

})

export default PetInfoSectionCard
