import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { Controller } from "react-hook-form";
import { useState } from "react";

const TYPE = {
  pet_gender: {
    name: "pet_gender",
    options: [
      {
        value: 1,
        label: "Đực",
      },
      {
        value: 2,
        label: "Cái",
      },
    ],
  },
  pet_triet_san: {
    name: "is_triet_san",
    options: [
      {
        value: true,
        label: "Rồi",
      },
      {
        value: false,
        label: "Chưa",
      },
    ],
  },
};

const RadioButton = ({ label, selected, onSelect }) => (
  <TouchableOpacity style={styles.radioOption} onPress={() => onSelect(label)}>
    <View style={[styles.radioCircle(selected)]}>
      {selected && <View style={styles.radioDot} />}
    </View>
    <Text style={styles.radioText}>{label}</Text>
  </TouchableOpacity>
);

const RadioGroup = ({ control, type }) => {
  const { options, name } = TYPE[type];

  const [selectedOption, setSelectedOption] = useState(options[0].value);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={selectedOption}
      render={({ field: { onChange, value } }) => (
        <View>
          {options.map((option) => {
            const { value, label } = option;
            return (
              <RadioButton
                key={value}
                label={label}
                selected={selectedOption === value}
                onSelect={() => {
                  setSelectedOption(value);
                  onChange(value);
                }}
              />
            );
          })}
        </View>
      )}
    />
  );
};
export default RadioGroup;
