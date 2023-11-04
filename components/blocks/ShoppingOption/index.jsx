import React from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { FONTS, SIZES, COLORS, IMAGES } from "../../../constants";
import styles from "./style";
import ShoppingOptionElement from "../../elements/ShoppingOptionElement";

const OPTION_LEFT_LIST = ["my_order", "address_book"];
const OPTION_RIGHT_LIST = ["cart", "payment_method"];
const ShoppingOptions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Tùy chọn mua hàng</Text>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.line}>
              <View style={styles.line1}></View>
            </View>
            <View style={styles.mainContain}>
              <View>
                {OPTION_LEFT_LIST.map((item, index) => (
                  <ShoppingOptionElement
                    key={`${item} + ${index}`}
                    type={item}
                  />
                ))}
              </View>
              <View>
                {OPTION_RIGHT_LIST.map((item, index) => (
                  <ShoppingOptionElement
                    key={`${item} + ${index}`}
                    type={item}
                  />
                ))}
              </View>
            </View>
            <View style={styles.bottomContent}>
              <Text style={styles.headerBottomText}>
                Hướng dẫn & Chính sách
              </Text>
              <Text style={styles.bottomText}>Chính sách giao hàng</Text>
              <Text style={styles.bottomText}>Chính sách đổi trả</Text>
              <Text style={styles.bottomText}>
                Chính sách bảo mật thanh toán
              </Text>
              <Text style={styles.bottomText}>Hướng dẫn mua hàng</Text>
              <Text style={styles.bottomText}>
                Điều khoản và quy chế hoạt động
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ShoppingOptions;
