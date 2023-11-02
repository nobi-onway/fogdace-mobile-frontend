import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import {
  ContentContainer,
  ImageUploader,
  LinkableButton,
} from "../../../components/elements";
import styles from "../../global.style";
import useAuth from "../../../hooks/useAuth";
import { COLORS, FONTS } from "../../../constants";

export default function CompletingProfile() {
  const params = useLocalSearchParams();
  const { sign_up_with_email, sign_up_with_app } = useAuth();
  const [avatar, setAvatar] = useState(undefined);
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const { username, password, confirmPassword } = params;

  const signUp = async () => {
    const sign_up_data = {
      username: username,
      password: password,
      confirmPassword: confirmPassword,
      avatar:
        avatar ||
        "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/37942853/6e16fe481f36e8bb782a51f0da6c369e58a1e8dc.png",
      name: name,
    };
    // await sign_up_with_email(sign_up_data);

    await sign_up_with_app(sign_up_data);
  };

  return (
    <ContentContainer>
      <View style={{ height: "100%", justifyContent: "space-between" }}>
        <View style={{ height: 360, justifyContent: "space-evenly" }}>
          <Text style={[styles.title_md, { textAlign: "center" }]}>
            Hoàn thiện thông tin cá nhân
          </Text>
          <ImageUploader onUpload={(url) => setAvatar(url)} />
          <View>
            <TextInput
              value={name}
              onChangeText={(value) => {
                const error =
                  value.length > 0
                    ? null
                    : { message: "Tên của BOSS không được để trống" };
                setError(error);
                setName(value);
              }}
              placeholder="Tên người dùng"
              placeholderTextColor={COLORS.blackGrey}
              textAlign="center"
              style={{
                borderBottomWidth: 2,
                borderBottomColor: COLORS.blackGrey,
                fontFamily: FONTS.bold,
                fontSize: 24,
                paddingVertical: 12,
                marginVertical: 8,
              }}
            />
            {error && (
              <Text style={{ color: COLORS.danger, fontFamily: FONTS.bold }}>
                {error.message}
              </Text>
            )}
          </View>
        </View>
        <LinkableButton
          type={error ? "disable" : "primary"}
          handlePress={signUp}
        >
          Xong
        </LinkableButton>
      </View>
    </ContentContainer>
  );
}
