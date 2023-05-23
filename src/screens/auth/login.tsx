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
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { getLoginSelector, passwordState, mobileState, authState, authSelector } from "../../recoil/auth";
import axios from "axios";
import { setCookie } from "../../cookie/_cookie";
import { showToastWithGravity } from "../../toast/toast";


const Login = function({ navigation }: any) {
  
  const [mobile, setMobile] = useState("01011112222");
  const [password, setPassword] = useState("qwer1234!");
  const [auth, setAuth] = useRecoilState(authSelector);

  //const loginLoadable = useRecoilValueLoadable(getLoginSelector);
  /*  function doLogin() {

    switch (loginLoadable.state) {
      case "hasValue":
        const phone = loginLoadable.contents.phone;
        const name = loginLoadable.contents.name;
        const role = loginLoadable.contents.role;
        const token = loginLoadable.contents.token;
        setAuth({phone,name,role,token});
        if (role == "GUEST")
        {
          navigation.push("InitialLogin");
        }
        else
        {
          navigation.push("Home");
        }

        console.log("auth:"+ auth.phone);
      case "loading":

      case "hasError":
        //console.log(loginLoadable.errorOrThrow())
    }
  }*/

  async function doLogin() {
    try {
      const params = JSON.stringify({
        "phone": mobile,
        "password": password
      });
      const response = await axios.post(
        Constant.baseUrl + "/login/ptect", params, {
          "headers": {
            "content-type": "application/json"
          }
        }
      );
      console.log(response.data);
      if (response.status == 200) {

        setCookie("token", response.data.token);
        setCookie("phone", response.data.phone);
        setCookie("name", response.data.name);
        setAuth(response.data);
        const role = response.data.role;
        if (role == "GUEST") {
          //showToastWithGravity("created");
          navigation.push("InitialLogin");
        } else {
          navigation.push("Home");
        }

      } else {
        showToastWithGravity("오류 발생");
      }
    } catch (e) {
      showToastWithGravity("오류 발생");
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
          <TextInput secureTextEntry={true} onChangeText={newText => setPassword(newText)}
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
