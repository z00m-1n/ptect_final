import React, { Children, useEffect, useRef, useState } from "react";
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
import { Screens } from "../../navigation/navigator";
import { inputStyle } from "../../style/input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackArrowTitle from "../../components/backarrow_title";
import FlatList = Animated.FlatList;
import constant from "../../global/constant";
import { Divider } from "@rneui/themed";

import testImage from "../../../assets/images/test.png";
import axios from "axios";
import { setCookie } from "../../cookie/_cookie";
import { showToastWithGravity } from "../../toast/toast";
import { authSelector, authState } from "../../recoil/auth";
import { useRecoilState, useRecoilValue } from "recoil";

const Report: React.FunctionComponent = ({navigation}:any) => {

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const { width, height } = Dimensions.get("screen");
  const auth = useRecoilValue(authSelector);

  const MINUTES_IN_MS = 10 * 1000;
  const INTERVAL = 10;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

  //const minutes = String(Math.floor(((timeLeft / (1000 * 60)) % 60) % 60)).padStart(2, '0');
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');
  const milliSecond = String(Math.floor(timeLeft/10)).padStart(4, '0');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - INTERVAL);
    }, INTERVAL);

    if (timeLeft <= 0) {
      clearInterval(timer);
      doReport();
      console.log('타이머가 종료되었습니다.');
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  async function doReport() {
    try {

      const response = await axios.post(
        Constant.baseUrl + "/test/report", {
          "headers": {
            "content-type": "application/json",
            "Authorization" : "Bearer " + auth.token
          }
        }
      );

      if (response.status == 200) {

        navigation.push('ReportComplete');

      } else {
        navigation.push('ReportComplete');
        showToastWithGravity("오류 발생");
      }
    } catch (e) {
      navigation.push('ReportComplete');
      showToastWithGravity("오류 발생");
    }
  }

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
              <Text style={{fontSize:45, fontWeight:'bold', color:'#4B0082'}}>{second.padStart(2,"0")} : {milliSecond.substring(2,4)}</Text>
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
            <Pressable style={[purpleBtn, { marginTop: 40 }]} onPress={doReport}>
              <Text style={styles.btnText}>신고 접수</Text>
            </Pressable>
            <Pressable style={[purpleBtn, { marginTop: 10 }]} onPress={()=>navigation.pop()} >
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
