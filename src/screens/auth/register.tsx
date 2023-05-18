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

export type ParentCompProps = {
  children: React.ReactNode;
}

const Register: React.FunctionComponent = ({navigation}:any) => {

  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  return (
    <SafeAreaView style={styles.container}>
      <StatusBarView />
      <KeyboardAwareScrollView >
        <View style={styles.area1}>
          <Text style={styles.mainText}>회원가입</Text>
        </View>
        <View style={[styles.area2,{marginTop: 100}]}>
          <View style={{ flexDirection: "row", paddingHorizontal: Constant.paddingHorizontal }}>
            <View style={{ flex: 7, paddingRight: 10 }}>
              <TextInput onChangeText={newText => setMobile(newText)}
                         defaultValue={mobile} style={[grey, { marginTop: 0 }]} placeholder="전화번호 입력" placeholderTextColor="#FFFFFF">

              </TextInput>


            </View>
            <View style={{ flex: 3, paddingLeft: 10 }}>
              <Pressable style={[darkGreyBtn, { marginTop: 0 }]}>
                <Text style={styles.btnText}>중복확인</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.area2}>
          <View style={{ flexDirection: "row", paddingHorizontal: Constant.paddingHorizontal }}>
            <View style={{ flex: 7, paddingRight: 10 }}>


              <TextInput onChangeText={newText => setName(newText)}
                         defaultValue={name} style={[grey, { marginTop: 20 }]} placeholder="이름 입력" placeholderTextColor="#FFFFFF">

              </TextInput>
            </View>
            <View style={{ flex: 3, paddingLeft: 10 }}>

            </View>
          </View>
        </View>
        <View style={styles.area2}>
          <View style={{ flexDirection: "row", paddingHorizontal: Constant.paddingHorizontal }}>
            <View style={{ flex: 7, paddingRight: 10 }}>

              <TextInput onChangeText={newText => setPassword(newText)}
                         defaultValue={password} style={[grey, { marginTop: 20 }]} placeholder="비밀번호 입력" placeholderTextColor="#FFFFFF">

              </TextInput>
            </View>
            <View style={{ flex: 3, paddingLeft: 10 }}>

            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: Constant.paddingHorizontal, alignItems: "center" }}>

          <View style={{ marginTop: 50 }}>
            <Pressable style={[purpleBtn, { marginTop: 0 }]} onPress={()=> navigation.push('AuthHome')}>
              <Text style={styles.btnText}>회원가입</Text>
            </Pressable>
          </View>

        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
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
const darkGreyBtn = StyleSheet.flatten([generalStyle.roundBtn, btnStyle.darkGrey, generalStyle.shadow]);
const purpleBtn = StyleSheet.flatten([generalStyle.roundBtn, btnStyle.purple, generalStyle.shadow, generalStyle.btnSmallSize]);
export default Register;
