import React from "react";
import { View, Text } from "react-native";
import Icon3D from "../../elements/Icon3D";
import styles from "./style";
import usePetHealthInfoCard from "./usePetHealthInfoCard";

const PetHealthInfoCard = ({ name, pet }) => {
  const PET_HEALTH_INFO_CARD = usePetHealthInfoCard(pet);

  const { icon, mainInfo, subInfo } = PET_HEALTH_INFO_CARD[name];

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon3D type={icon} />
      </View>
      <View>
        <Text style={styles.mainInfo}>{mainInfo}</Text>
      </View>
      <View>
        <Text style={styles.subInfo}>{subInfo}</Text>
      </View>
    </View>
  );
};

export default PetHealthInfoCard;
