
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./style";

const RadioButton = ({ label, selected, onSelect }) => (
  <TouchableOpacity
    style={styles.radioOption}
    onPress={() => onSelect(label)}
  >
    <View style={[styles.radioCircle(selected)]}>
      {selected && <View style={styles.radioDot} />}
    </View>
    <Text style={styles.radioText}>{label}</Text>
  </TouchableOpacity>
);

const RadioGroup = ({ options, selectedOption, onOptionSelect }) => (
  <View>
    {options.map((option) => (
      <RadioButton
        key={option}
        label={option}
        selected={selectedOption === option}
        onSelect={onOptionSelect}
      />
    ))}
  </View>
);
export default RadioGroup;
