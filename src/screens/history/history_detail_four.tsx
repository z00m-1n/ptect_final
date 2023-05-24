import React, { Children, useState } from "react";
import { Animated, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import GeneralStatusBar from "../../components/general_status_bar";
import StatusBarView from "../../components/status_bar_view";
import StatusBarScreen from "../../components/status_bar_screen";
import Constant from "../../global/constant";
import { Screens } from "../../navigation/navigator";
import { btnStyle } from "../../style/button";
import { generalStyle } from "../../style/general";
import { inputStyle } from "../../style/input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackArrowTitle from "../../components/backarrow_title";
import FlatList = Animated.FlatList;
import constant from "../../global/constant";
import { Divider } from "@rneui/themed";

import testImage from "../../../assets/images/history_ex.png";
import GeneralDivider from "../../components/general_divider";

const HistoryDetailFour: React.FunctionComponent = ({navigation}:any) => {

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");


  return (
    <SafeAreaView style={styles.container}>
      <StatusBarView />
      <BackArrowTitle title={"신고 내역 조회"}></BackArrowTitle>
      <KeyboardAwareScrollView>
        <View style={{ padding: constant.viewPadding }}>

          <View><Text style={{ fontSize: 25, fontWeight: "bold", color: "#000000" }}>신고 상세 정보</Text></View>

          <View style={generalStyle.greyArea}>
            <View style={{ flexDirection: "row" }}>

              <View style={{ flex: 3 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold", color: "#000000" }}>신고 식별 번호</Text>
              </View>
              <View style={{ flex: 7 }}>
                <Text style={{ fontSize: 17, color: "#000000" }}>: 202304061322</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 3 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold", color: "#000000" }}>신고 날짜</Text>
              </View>
              <View style={{ flex: 7 }}>
                <Text style={{ fontSize: 17, color: "#000000" }}>: 2023년 04월 06일</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 3 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold", color: "#000000" }}>신고 유형</Text>
              </View>
              <View style={{ flex: 7 }}>
                <Text style={{ fontSize: 17, color: "#000000" }}>: 자동신고</Text>
              </View>
            </View>


          </View>

         <GeneralDivider/>
          <View><Text style={{ fontSize: 25, fontWeight: "bold", color: "#000000" }}>신고 이미지</Text></View>

          <View style={{
            marginTop: 15,
            borderRadius: 20,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#D2D2D2"
          }}>
            <Image style={{
              width: "100%", height: undefined,
              aspectRatio: 1
            }}
                   source={testImage} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Pressable style={[purpleBtn, {marginTop:40}]} onPress={()=> navigation.push('Home')}>
              <Text style={styles.btnText}>확인</Text>
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
  }

});
const purpleBtn = StyleSheet.flatten([generalStyle.generalBtn, btnStyle.purple, generalStyle.btnSmallSize]);
export default HistoryDetailFour;
