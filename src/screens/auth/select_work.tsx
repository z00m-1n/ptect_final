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

import StatusBarView from "../../components/status_bar_view";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackArrowTitle from "../../components/backarrow_title";
import constant from "../../global/constant";
import { generalStyle } from "../../style/general";
import { btnStyle } from "../../style/button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/navigator";

type SelectWorkProps = NativeStackScreenProps<RootStackParamList, "SelectWork">;
const SelectWork = ({route,navigation}:SelectWorkProps) => {

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const { width, height } = Dimensions.get("screen");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarView />
      <BackArrowTitle  title={"점포 등록"}></BackArrowTitle>
      <KeyboardAwareScrollView contentContainerStyle={{flex:1}}>
        <View style={{ padding: constant.viewPadding, flex :1,  justifyContent: "center", alignItems: "center",
        }}>

          <Text style={styles.mainText}>선택하신 점포
          </Text>
          <Text style={styles.mainText}>{route.params.storeName}
          </Text>
          <Text style={styles.subText}>서울시 서대문구 신촌역로 44
          </Text>
          <Text style={styles.mainText}>에 근무자 등록을 요청하시겠습니까?.
          </Text>


          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Pressable style={[purpleBtn, { marginTop: 40 }]} onPress={()=>navigation.push('SelectComplete',{isStore:false})}>
              <Text style={styles.btnText}>근무 요청</Text>
            </Pressable>
            <Pressable style={[purpleBtn, { marginTop: 20 }]} onPress={()=>navigation.reset({routes: [{name: "Home", }]})}>
              <Text style={styles.btnText}>취소</Text>
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
    fontSize: 20, fontWeight: "bold", color: "#000000"
  },
    subText: {
      fontSize: 14,
      color:"#000000"
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
const purpleBtn = StyleSheet.flatten([generalStyle.generalBtn, btnStyle.purple, generalStyle.btnNormalSize]);
const circle =  StyleSheet.flatten([styles.round, styles.shadow]);


export default SelectWork;
