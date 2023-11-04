import { View, Text, Pressable } from "react-native";
import { Icon2D } from "../../elements";

import styles from "./style";
import usePetInfoSectionCard from "./usePetInfoSectionCard";

const NoData = () => {
  return (
    <View style={styles.centerHorizontalAndVertical}>
      <Text style={styles.noDataText}>Hiện tại chưa có dữ liệu</Text>
      <Icon2D name="born" />
      <Pressable style={styles.addBtn}>
        <Text style={styles.addBtnText}>Thêm</Text>
      </Pressable>
    </View>
  );
};

const PetInfoSectionCard = ({ name, pet_health_profile }) => {
  const PET_INFO_SECTION_CARD = usePetInfoSectionCard(pet_health_profile);

  const { icon, title, children } = PET_INFO_SECTION_CARD[name];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleWrapper}>
          <View style={styles.iconWrapper}>
            <Icon2D name={icon} />
          </View>
          <Text style={styles.mainText}>{title}</Text>
        </View>
        <Pressable style={styles.detailWrapper}>
          <Text style={styles.detailText}>Chi tiết</Text>
          <Icon2D name="right" />
        </Pressable>
      </View>

      <View>{children ? children : <NoData />}</View>
    </View>
  );
};

export default PetInfoSectionCard;
