import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import { ICONS, SIZES, FONTS, COLORS } from "../../../constants";
import {
  getCurrentDate,
  getCurrentFormattedDate,
} from "../../../utils/getCurrentDate";
import { Controller } from "react-hook-form";

const FormInputDate = ({ control, type }) => {
  const [date, setDate] = useState(getCurrentDate());
  const [show, setShow] = useState(false);

  const onChange = (e, selectedDate) => {
    setDate(new Date(selectedDate));
  };

  const onAndroidChange = (e, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      setDate(new Date(selectedDate));
    }
  };

  const onCancelPress = () => {
    setDate(new Date(date));
    setShow(false);
  };
  const onDonePress = () => {
    setShow(false);
  };

  const renderDatePicker = () => {
    return (
      <Controller
        control={control}
        name={type}
        render={({ field: { onChange, onBlur, value } }) => (
          <DateTimePicker
            display={Platform.OS === "ios" ? "spinner" : "default"}
            timeZoneOffsetInMinutes={0}
            value={value || new Date()}
            mode="date"
            minimumDate={new Date(1920, 10, 20)}
            maximumDate={new Date()}
            // onChange={Platform.OS === "ios" ? onChange : onAndroidChange}
            onChange={(e, selectedDate) => onChange(selectedDate)}
            onBlur={(e, selectedDate) => onBlur(selectedDate)}
          />
        )}
      />
    );
  };

  return (
    <Pressable onPress={() => setShow(true)} activeOpacity={0}>
      <View>
        <View style={styles.box}>
          <Ionicons
            style={styles.prefix}
            name={ICONS.ionIcon_calendar}
            size={SIZES.large}
            color={COLORS.danger}
          />
          <Text style={styles.txt}>{getCurrentFormattedDate(date)}</Text>
        </View>
        {Platform.OS !== "ios" && show && renderDatePicker()}

        {Platform.OS === "ios" && (
          <Modal
            transparent={true}
            animationType="slide"
            visible={show}
            supportedOrientations={["portrait"]}
            onRequestClose={() => setShow(!show)}
          >
            <View style={styles.screen}>
              <TouchableHighlight
                underlayColor={"#000"}
                style={styles.pickerContainer}
              >
                <View style={{ backgroundColor: "#000" }}>
                  <View style={{ marginTop: 20 }}>{renderDatePicker()}</View>
                  <TouchableHighlight
                    underlayColor={"transparent"}
                    onPress={onCancelPress}
                    style={[styles.btnText, styles.btnCancel]}
                  >
                    <Text style={{ fontSize: 18, color: "white" }}>Hủy</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    underlayColor={"transparent"}
                    onPress={onDonePress}
                    style={[styles.btnText, styles.btnDone]}
                  >
                    <Text style={{ fontSize: 18, color: "white" }}>Xong</Text>
                  </TouchableHighlight>
                </View>
              </TouchableHighlight>
            </View>
          </Modal>
        )}
      </View>
    </Pressable>
  );
};

export default FormInputDate;
