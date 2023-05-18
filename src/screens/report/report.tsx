import React, { Children, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput, TouchableHighlight,
  View
} from "react-native";
import GeneralStatusBar from "../../components/general_status_bar";
import StatusBarView from "../../components/status_bar_view";
import StatusBarScreen from "../../components/status_bar_screen";
import Constant from "../../global/constant";
import { btnStyle } from "../../style/button";
import { generalStyle } from "../../style/general";
import { inputStyle } from "../../style/input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackArrowTitle from "../../components/backarrow_title";
import FlatList = Animated.FlatList;
import constant from "../../global/constant";
import { Divider } from "@rneui/themed";

import testImage from "../../../assets/images/test.png";

const Report: React.FunctionComponent = () => {

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const { width, height } = Dimensions.get("screen");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarView />
      <BackArrowTitle title={"수동 포괄 신고"}></BackArrowTitle>
      <KeyboardAwareScrollView>
        <View style={{ padding: constant.viewPadding }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableHighlight
              style = {circle}
              underlayColor = '#ccc'
              onPress = { ()=>{} }
            >
              <Text style={{fontSize:45, fontWeight:'bold', color:'#4B0082'}}>0:00</Text>
            </TouchableHighlight>
          </View>
          <View style={{
            justifyContent: "center", alignItems: "center",
            marginHorizontal: width * 0.1, marginTop : 30
          }}>
            <Text style={styles.mainText}>긴급 상황에 대한
            </Text>
            <Text style={styles.mainText}>신고가 진행 중입니다.
            </Text>
            <Text style={styles.mainText}>신고를 접수하시겠습니까?
            </Text>
            <Text style={styles.mainText}>10초 후 자동 접수됩니다.
            </Text>
          </View>


          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Pressable style={[purpleBtn, { marginTop: 40 }]}>
              <Text style={styles.btnText}>신고 접수</Text>
            </Pressable>
            <Pressable style={[purpleBtn, { marginTop: 10 }]}>
              <Text style={styles.btnText}>신고 취소</Text>
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
  mainText: {
    fontSize: 25, fontWeight: "bold", color: "#000000"
  }
  , shadow: {
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 2, // <- Radius of the shadow

    padding: 16,
    margin: 8
  },
  round: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 0.6,
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.6,
    backgroundColor:'#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop :20
  }
});
const purpleBtn = StyleSheet.flatten([generalStyle.generalBtn, btnStyle.purple, generalStyle.btnSmallSizeNoWidth]);
const circle =  StyleSheet.flatten([styles.round, styles.shadow]);


export default Report;
