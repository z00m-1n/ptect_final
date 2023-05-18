import React, { Children, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import GeneralStatusBar from "../../components/general_status_bar";
import StatusBarView from "../../components/status_bar_view";
import StatusBarScreen from "../../components/status_bar_screen";
import Constant from "../../global/constant";
import { btnStyle } from "../../style/button";
import { generalStyle } from "../../style/general";
import { inputStyle } from "../../style/input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useRecoilValueLoadable } from "recoil";
import { getLoginSelector } from "../../recoil/auth";


const Login: React.FunctionComponent = ({navigation}:any) => {

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const loginLoadable = useRecoilValueLoadable(getLoginSelector);

  function doLogin() {

    switch (loginLoadable.state) {
      case "hasValue":
          if (loginLoadable.contents.status == "success")
          {
            navigation.push("InitialLogin");
          }
      case "loading":

      case "hasError":

    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBarView />
      <KeyboardAwareScrollView>
        <View style={styles.area1}>
          <Text style={styles.mainText}>로그인</Text>
        </View>
        <View style={{ marginTop: 100, paddingHorizontal: Constant.paddingHorizontal }}>
          <TextInput onChangeText={newText => setMobile(newText)}
                     defaultValue={mobile} style={[grey, { marginTop: 0 }]} placeholder="전화번호 입력"
                     placeholderTextColor="#FFFFFF">

          </TextInput>
        </View>
        <View style={{ marginTop: 20, paddingHorizontal: Constant.paddingHorizontal }}>
          <TextInput onChangeText={newText => setPassword(newText)}
                     defaultValue={password} style={[grey, { marginTop: 0 }]} placeholder="비밀번호 입력"
                     placeholderTextColor="#FFFFFF">

          </TextInput>
        </View>
        <View style={{ paddingHorizontal: Constant.paddingHorizontal, alignItems: "center" }}>

          <View style={{ marginTop: 50 }}>
            <Pressable onPress={doLogin} style={[purpleBtn, { marginTop: 0 }]}>
              <Text style={styles.btnText}>로그인</Text>
            </Pressable>
          </View>

        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  area1: {
    paddingTop: 10,
    alignItems: "center"
  },
  area2: {
    marginTop: 0
  },
  mainText: {
    fontSize: 17,
    fontWeight: "bold"
  },
  btnText: {
    color: "#FFFFFF"
  }
});
const grey = StyleSheet.flatten([generalStyle.generalInput, inputStyle.grey, generalStyle.shadow]);
const purpleBtn = StyleSheet.flatten([generalStyle.roundBtn, btnStyle.purple, generalStyle.shadow, generalStyle.btnSmallSize]);
export default Login;
