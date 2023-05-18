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

import StatusBarView from "../../components/status_bar_view";
import { btnStyle } from "../../style/button";
import { generalStyle } from "../../style/general";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackArrowTitle from "../../components/backarrow_title";
import constant from "../../global/constant";
import GeneralDivider from "../../components/general_divider";
import UserSvg from "../../svg/user_svg";
import RegisterStore from "@images/registore.png";
import Store from "@images/store.png"
const MyPageMain: React.FunctionComponent = () => {

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");


  return (
    <SafeAreaView style={styles.container}>
      <StatusBarView />
      <BackArrowTitle title={"신고 내역 조회"}></BackArrowTitle>
      <KeyboardAwareScrollView>
        <View style={{ padding: constant.viewPadding }}>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 3 }}>
              <TouchableOpacity
                style={[styles.circle]}
              >
                <UserSvg />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 7, paddingHorizontal: 10 }}>
              <View style={generalStyle.greyArea}>
                <View style={{ flexDirection: "row" }}>

                  <View style={{ flex: 3 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold", color: "#000000" }}>성명</Text>
                  </View>
                  <View style={{ flex: 7 }}>
                    <Text style={{ fontSize: 17, color: "#000000" }}>: 홍길동</Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 3 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold", color: "#000000" }}>정보</Text>
                  </View>
                  <View style={{ flex: 7 }}>
                    <Text style={{ fontSize: 17, color: "#000000" }}>: 01011112222</Text>
                  </View>
                </View>

              </View>
            </View>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Pressable style={[purpleBtn, { marginTop: 20 }]}>
              <Text style={styles.btnText}>정보 변경</Text>
            </Pressable>
          </View>


          <GeneralDivider />
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "#000000" }}>점포관리</Text>

          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Pressable style={[generalStyle.simpleGreyArea, { justifyContent: "center", alignItems: "center", marginHorizontal:10 }]}>
                <Image style={{ width: 60,
                  height: 60, resizeMode: 'stretch',}}
                  source={RegisterStore}
                ></Image>
                <Text style={{fontSize:15, color:'#000000', fontWeight:'500', marginTop:10}}>점포 등록</Text>
              </Pressable>
            </View>
            <View style={{ flex: 1, alignItems: "flex-start" }}>
              <Pressable style={[generalStyle.simpleGreyArea, { justifyContent: "center", alignItems: "center", marginHorizontal:10 }]}>
                <Image style={{ width: 60,
                  height: 60, resizeMode: 'stretch',}}
                  source={Store}
                ></Image>
                <Text style={{fontSize:15, color:'#000000', fontWeight:'500', marginTop:10}}>나의 점포</Text>
              </Pressable>
            </View>
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
const purpleBtn = StyleSheet.flatten([generalStyle.generalBtn, btnStyle.purple, generalStyle.btnSmallSizeNoWidth]);
export default MyPageMain;
