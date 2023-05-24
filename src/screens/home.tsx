import React, { Children, useEffect, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StatusBarView from "../components/status_bar_view";
import { generalStyle } from "../style/general";
import { btnStyle } from "../style/button";
import InitialLogin from "./auth/initial_login";
import { Screens } from "../navigation/navigator";
import { WithLocalSvg } from "react-native-svg";
import UserSvg from "../svg/user_svg";
import Constant from "../global/constant";
import Historys from "./history/historys";
import { useRecoilValue } from "recoil";
import { authState } from "../recoil/auth";
import Report from "./report/report";


const Home: React.FunctionComponent = ({navigation}:any) => {

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const auth = useRecoilValue(authState);
  useEffect(()=>{

  },[])


  return (
    <SafeAreaView style={styles.container}>
      <StatusBarView />
          <View style={{ flex: 5, alignItems:'center', justifyContent:'flex-end' }}>
            <TouchableOpacity
              style={[styles.circle]}
            >
              <UserSvg/>
            </TouchableOpacity>
            <Text style={{fontSize: 16, marginTop:20, fontWeight : '700', marginBottom:20}}>홍길동</Text>
          </View>


          <View style={{ flex: 5, alignItems: "center" }}>
            <View style={{ marginTop: 20 ,alignSelf: 'stretch', paddingHorizontal : Constant.paddingHorizontal }}>
              <Pressable style={[purpleBtn, { marginTop: 0  }]} onPress={()=> navigation.push('MyPageMain')}>
                <Text style={styles.btnText}>마이페이지</Text>
              </Pressable>
            </View>
            <View style={{ marginTop: 10, alignSelf: 'stretch', paddingHorizontal : Constant.paddingHorizontal }}>
              <Pressable style={[purpleBtn, { marginTop: 0,  }]} onPress={()=> navigation.push('Report')}>
                <Text style={styles.btnText}>긴급 수동 신고</Text>
              </Pressable>
            </View>
            <View style={{flexDirection : 'row', flex :1, paddingHorizontal : Constant.paddingHorizontal, marginTop : 10 }}>
              <View style={{ flex: 5, alignSelf: 'stretch', paddingRight : 5 }}>
                <Pressable style={[purpleBtn, { marginTop: 0,  }]} onPress={()=> navigation.push('Histories')}>
                  <Text style={styles.btnText}>신고 내역 조회</Text>
                </Pressable>
              </View>
              <View style={{ flex: 5, alignSelf: 'stretch', paddingLeft : 5  }}>
                <Pressable style={[purpleBtn, { marginTop: 0,  }]} onPress={()=> navigation.push('Notification')}>
                  <Text style={styles.btnText}>현장 알림</Text>
                </Pressable>
              </View>
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

  circle:{
    borderWidth:3,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:120,
    height:120,
    backgroundColor:'#fff',
    borderRadius:100
  },
  btnText: {
    color: "#FFFFFF"
  }
});

const purpleBtn = StyleSheet.flatten([generalStyle.roundBtn, btnStyle.purple, generalStyle.btnBigSize]);
export default Home;
