import { View } from 'react-native';
import React, { forwardRef, useMemo } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import styles from './style'

const CustomBottomSheet = forwardRef((props, ref) => {
	const snapPoints = useMemo(() => ['50%', '70%'], []);

    const initialIndex = props.initialIndex !== undefined ? props.initialIndex : -1;

	return (
		<BottomSheet
			ref={ref}
			index={initialIndex}
			snapPoints={snapPoints}
			enablePanDownToClose={true}
			handleIndicatorStyle={{ backgroundColor: '#ccc' }}
			backgroundStyle={{ backgroundColor: 'white' }}
		>
			<View style={styles.contentContainer}>
				{props.children}
			</View>
		</BottomSheet>
	);
});


export default CustomBottomSheet;