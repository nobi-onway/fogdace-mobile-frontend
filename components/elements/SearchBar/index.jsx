import { useState } from "react";
import { TextInput, View } from "react-native";

import styles from "./style";
import { COLORS, ICONS, SIZES } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";

const DEFAULT_STATE = {
  value: "",
  placeholder: "Tìm kiếm",
};

function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState(DEFAULT_STATE.value);
  const { placeholder } = DEFAULT_STATE;

  const handleOnChange = (value) => {
    onSearch(value);
    setSearchValue(value);
  };

  return (
    <View style={styles.container}>
      <Ionicons
        style={styles.prefix}
        name={ICONS.ionIcon_search}
        size={SIZES.medium}
      />
      <TextInput
        style={styles.input}
        value={searchValue}
        onChangeText={(value) => handleOnChange(value)}
        placeholder={placeholder}
        placeholderTextColor={COLORS.lightBlack}
      />
    </View>
  );
}

export default SearchBar;
