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

import testImage from "../../../assets/images/test.png";
import GeneralDivider from "../../components/general_divider";

const Notification: React.FunctionComponent = ({navigation}:any) => {

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");


  return (
    <SafeAreaView style={styles.container}>
      <StatusBarView />
      <BackArrowTitle title={"현장 알림"}></BackArrowTitle>
      <KeyboardAwareScrollView>
        <View style={{ padding: constant.viewPadding }}>

          <View style={generalStyle.greyArea}>
            <Text style={{ fontSize: 12,  color: "#000000" }}>
              편의점 현장의 스피커를 이용해 경보음을 발생하거나, 외부 전광판에 SOS 메시지를 출력하여 도움을 요청할 수 있습니다. 자동신고가 접수되었을 경우 경보음 발생과 전광판 출력이 모두 자동으로 이루어집니다. 자동신고로 탐지되지 않는 상황에 대해서는 아래 버튼을 눌러 현장에 알림을 보낼 수 있습니다.
            </Text>
          </View>
          <GeneralDivider/>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 17, fontWeight:'500',  color: "#000000" }}>
              다음 분류 중 현장에 보낼 알림을 선택해 주십시오.
            </Text>
          </View>
          <View style={{  alignSelf: 'stretch', marginHorizontal:40, marginTop:40 }}>
            <Pressable style={[purpleBtn, { marginTop: 0,  }]} onPress={()=> navigation.push('Home')}>
              <Text style={styles.btnText}>"범죄상황감지" 소리 출력</Text>
            </Pressable>
          </View>
          <View style={{  alignSelf: 'stretch', marginHorizontal:40, marginTop:20 }}>
            <Pressable style={[purpleBtn, { marginTop: 0,  }]} onPress={()=> navigation.push('Home')}>
              <Text style={styles.btnText}>"SOS" 전광판 출력</Text>
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

const purpleBtn = StyleSheet.flatten([generalStyle.roundBtn, btnStyle.purple, generalStyle.btnBigSize]);
export default Notification;
