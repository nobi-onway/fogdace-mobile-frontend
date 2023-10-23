import { Text, TextInput, View } from "react-native";
import styles from "./style";
import { COLORS, ICONS, SIZES } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Controller } from "react-hook-form";

const TYPE = {
  username: {
    placeholder: "Tài khoản của bạn",
    icon: ICONS.ionIcon_user,
    rules: () => ({
      required: "Bạn chưa nhập tên tài khoản của bạn! ",
      pattern: {
        value: /^\S*$/,
        message: "Tên tài khoản không được để trống",
      },
    }),
  },
  password: {
    placeholder: "Mật khẩu",
    icon: ICONS.ionIcon_lock_closed,
    isSecure: true,
    rules: () => ({
      required: "Bạn chưa nhập mật khẩu!",
      pattern: {
        value: /^(?=.*[a-zA-Z])(?=.*\d)(?!\s).{6,}$/,
        message:
          "Mật khẩu phải có ít nhất 6 ký tự. Gồm cả chữ thường, chữ hoa và số, không chứa khoảng trắng",
      },
    }),
  },
  confirmPassword: {
    placeholder: "Nhập lại mật khẩu",
    icon: ICONS.ionIcon_lock_closed,
    isSecure: true,
    rules: (validated) => ({
      required: "Bạn chưa nhập lại mật khẩu!",
      validate: () => validated || "Mật khẩu không khớp",
    }),
  },
  petName: {
    placeholder: "Chó Việt",
    rules: () => ({
      required: "Nhập tên cho thú cưng! ",
      pattern: {
        value: /^\S*$/,
        message: "Tên thú cưng không được để trống",
      },
    }),
  },
  petDescription: {
    placeholder: "Rất thân thiện nhưng cũng rất khùng",
    rules: () => ({
      required: "Nhập mô tả cho thú cưng!",
      pattern: {
        value: /^\S*$/,
        message: "Mô tả thú cưng không được để trống",
      },
    }),
  },
  petWeight: {
    placeholder: "Nhập vào kg",
    isKg: true,
    rules: () => ({
      required: "Vui lòng thêm cân nặng cho thú cưng!",
      pattern: {
        value: /^\S*$/,
        message: "Cân nặng thú cưng không được để trống",
      },
      validate: {
        isNumber: (value) => {
          if (isNaN(value)) {
            return "Cân nặng thú cưng phải là một số";
          }
          if(value > 80){
            return "Cân nặng phải nhỏ hơn hoặc bằng 80 kg";
          }
          if(value < 0.1){
            return "Cân nặng phải lớn hơn hoặc bằng 0.1";
          }
          return true;
        },
      },
    }),
  },
};

function FormInput({ type, control, validated = true }) {
  const [isSecure, setIsSecure] = useState(TYPE[type]?.isSecure);
  
  return (
    <Controller
      control={control}
      name={type}
      defaultValue={""}
      rules={TYPE[type].rules(validated)}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View>
          <View style={[styles.inputContainer(error)]}>
            <Ionicons
              style={styles.prefix}
              name={TYPE[type].icon}
              size={SIZES.large}
            />
            <TextInput
              style={styles.input}
              placeholder={TYPE[type].placeholder}
              placeholderTextColor={COLORS.lightBlack}
              secureTextEntry={isSecure}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
            {TYPE[type]?.isSecure && (
              <Ionicons
                style={styles.suffix}
                name={
                  isSecure ? ICONS.ionIcon_eye_close : ICONS.ionIcon_eye_open
                }
                size={SIZES.xLarge}
                onPress={() => setIsSecure(!isSecure)}
              />
            )}
            {TYPE[type]?.isKg && (
              <Text style={styles.isKg}>Kg</Text>
            )}
          </View>
          {error && <Text style={styles.errorMessage}>{error.message}</Text>}
        </View>
      )}
    />
  );
}

export default FormInput;
