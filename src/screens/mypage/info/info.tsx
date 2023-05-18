import React, { Children, useState } from "react";
import {
  Animated,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";


import RegisterStore from "@images/registore.png";
import Store from "@images/store.png";
import StatusBarView from "../../../components/status_bar_view";
import BackArrowTitle from "../../../components/backarrow_title";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import constant from "../../../global/constant";
import UserSvg from "../../../svg/user_svg";
import { generalStyle } from "../../../style/general";
import GeneralDivider from "../../../components/general_divider";
import { btnStyle } from "../../../style/button";
import Constant from "../../../global/constant";
import { inputStyle } from "../../../style/input";

const MyPageInfo: React.FunctionComponent = () => {

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");


  // @ts-ignore
  return (
    <SafeAreaView style={styles.container}>
      <StatusBarView />
      <BackArrowTitle title={"정보 수정"}></BackArrowTitle>
      <KeyboardAwareScrollView>
        <View style={{ padding: constant.viewPadding, alignItems: "center", marginTop: 20 }}>
          <TouchableOpacity
            style={[styles.circle]}
          >
            <UserSvg />
          </TouchableOpacity>
          <Pressable style={[darkGreyBtn, { marginTop: 10, paddingHorizontal:10 }]}>
            <Text style={[styles.btnText, { paddingVertical: 12 }]}>이미지 변경</Text>
          </Pressable>
          <View style={{ flexDirection: "row", marginTop: 60 }}>
            <View style={{ flex: 7, paddingRight: 10 }}>
              <TextInput onChangeText={newText => setMobile(newText)}
                         defaultValue={mobile} style={[grey, { marginTop: 0 }]} placeholder="전화번호 입력"
                         placeholderTextColor="#FFFFFF">

              </TextInput>


            </View>
            <View style={{ flex: 3, paddingLeft: 10 }}>
              <Pressable style={[darkGreyBtn, { marginTop: 0 }]}>
                <Text style={[styles.btnText, { paddingVertical: 12 }]}>중복확인</Text>
              </Pressable>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 7, paddingRight: 10 }}>


              <TextInput style={[grey, { marginTop: 20 }]} placeholder="이름 입력" placeholderTextColor="#FFFFFF">

              </TextInput>
            </View>
            <View style={{ flex: 3, paddingLeft: 10 }}>

            </View>
          </View>
          <View style={{ flexDirection: "row",  }}>
            <View style={{ flex: 7, paddingRight: 10 }}>

              <TextInput onChangeText={newText => setPassword(newText)}
                         defaultValue={password} style={[grey, { marginTop: 20 }]} placeholder="비밀번호 입력"
                         placeholderTextColor="#FFFFFF">

              </TextInput>
            </View>
            <View style={{ flex: 3, paddingLeft: 10 }}>

            </View>
          </View>
          <View style={{ marginTop: 50 }}>
            <Pressable style={[purpleBtn, { marginTop: 0 }]}>
              <Text style={styles.btnText}>정보 수정</Text>
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
  btnText: {
    color: "#FFFFFF"
  },
  circle: {
    borderWidth: 3,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 100
  }

});
const grey = StyleSheet.flatten([generalStyle.generalInput, inputStyle.grey, generalStyle.shadow]);
const darkGreyBtn = StyleSheet.flatten([generalStyle.roundBtn, btnStyle.darkGrey, generalStyle.shadow]);
const purpleBtn = StyleSheet.flatten([generalStyle.roundBtn, btnStyle.purple, generalStyle.shadow, generalStyle.btnSmallSize]);
export default MyPageInfo;
