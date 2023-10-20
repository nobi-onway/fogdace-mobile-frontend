import React from 'react'
import { View, Image } from 'react-native'
import { ROUNDED, SIZES } from '../../../constants'

const SHAPES = {
    'rounded': {
        borderRadius: ROUNDED.full

    },
    'default': {
        borderRadius: ROUNDED.tiny
    }
}

const AVATAR_SIZES = {
    'large':{
        width: SIZES.mega,
        height: SIZES.mega,
    },
    "small":{
        width: SIZES.xxLarge,
        height: SIZES.xxLarge,
    },
    "default":{
        width: SIZES.xxxLarge,
        height: SIZES.xxxLarge,
    }
}

const Avatar = ({ src, size = 'default', shape = 'default' }) => {

    const sizeStyle = AVATAR_SIZES[size] || AVATAR_SIZES['default'];
    const shapeStyle = SHAPES[shape] || SHAPES['default'];

    const styles = {
        avatar: {
          ...sizeStyle,
          ...shapeStyle,
        },
      };

  return (
    <View style={{flex: 1}}>
            <Image
              source={{
                uri: src,
              }}
              style={styles.avatar}
            />
          </View>
  )
}

export default Avatar
