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


const InitialLogin: React.FunctionComponent = () => {

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");


  return (
    <SafeAreaView style={styles.container}>
      <StatusBarView />
          <View style={{ flex: 3 }}>

          </View>
          <View style={{ flex: 7, alignItems: "center" }}>
            <Text style={styles.mainText}>귀하 계정의 권한이</Text>
            <Text style={styles.mainText}>[점주]와 [근로자] 중</Text>
            <Text style={styles.mainText}>무엇인지 선택해주세요.</Text>
            <View style={{ marginTop: 20 }}>
              <Pressable style={[purpleBtn, { marginTop: 0 }]}>
                <Text style={styles.btnText}>점주</Text>
              </Pressable>
            </View>
            <View style={{ marginTop: 10 }}>
              <Pressable style={[purpleBtn, { marginTop: 0 }]}>
                <Text style={styles.btnText}>근로자</Text>
              </Pressable>
            </View>
          </View>



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
    fontSize: 20,
    fontWeight: "bold"
  },
  btnText: {
    color: "#FFFFFF"
  }
});

const purpleBtn = StyleSheet.flatten([generalStyle.generalBtn, btnStyle.purple, generalStyle.btnSmallSize]);
export default InitialLogin;
