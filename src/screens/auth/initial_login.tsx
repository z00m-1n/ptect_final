import React, { Children, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import GeneralStatusBar from "../../components/general_status_bar";
import StatusBarView from "../../components/status_bar_view";
import StatusBarScreen from "../../components/status_bar_screen";
import Constant from "../../global/constant";
import { Screens } from "../../navigation/navigator";
import { btnStyle } from "../../style/button";
import { generalStyle } from "../../style/general";
import { inputStyle } from "../../style/input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { authSelector, mobileState, roleSelector } from "../../recoil/auth";
import axios from "axios";
import { setCookie } from "../../cookie/_cookie";
import { showToastWithGravity } from "../../toast/toast";


const InitialLogin: React.FunctionComponent = ({navigation}:any) => {

  const [role, setRole] = useState('');
  const [auth, setAuth] = useRecoilState(authSelector);
  async function saveRole(tp:string) {
    try {
      console.log(auth);
      const params = JSON.stringify({
        "phone": auth.phone,
        "roleKey": tp,
      });
      console.log(params);
      const response = await axios.post(
        Constant.baseUrl + '/account/auth',params, {"headers": {
            "content-type": "application/json",
            "Authorization" : "Bearer " + auth.token
          },}
      );
      console.log("response:"+response.data.data);
      if (response.status == 200) {

        if (response.data.status == 'CREATED')
        {
           auth.role = tp;
           setAuth(auth);
           console.log(auth);
           navigation.push("RegisterStoreList");
        }
        else
        {
          showToastWithGravity(response.data.message);
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
          <View style={{ flex: 3 }}>

          </View>
          <View style={{ flex: 7, alignItems: "center" }}>
            <Text style={styles.mainText}>귀하 계정의 권한이</Text>
            <Text style={styles.mainText}>[점주]와 [근로자] 중</Text>
            <Text style={styles.mainText}>무엇인지 선택해주세요.</Text>
            <View style={{ marginTop: 20 }}>
              <Pressable style={[purpleBtn, { marginTop: 0 }]} onPress={()=>{
                //setRole('OWNER')
                saveRole('OWNER');
              }}>
                <Text style={styles.btnText}>점주</Text>
              </Pressable>
            </View>
            <View style={{ marginTop: 10 }}>
              <Pressable style={[purpleBtn, { marginTop: 0 }]} onPress={()=>{
                //setRole('CLERK')
                saveRole('CLERK');
              }}>
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
    fontWeight: "bold",
    color:'#000000'
  },
  btnText: {
    color: "#FFFFFF"
  }
});

const purpleBtn = StyleSheet.flatten([generalStyle.generalBtn, btnStyle.purple, generalStyle.btnSmallSize]);
export default InitialLogin;
