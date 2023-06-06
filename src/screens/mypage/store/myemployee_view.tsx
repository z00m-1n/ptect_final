import React, { Children, useState } from "react";
import {
  Animated,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import StatusBarView from "../../../components/status_bar_view";
import BackArrowTitle from "../../../components/backarrow_title";
import FlatList = Animated.FlatList;
import { Screens } from "../../../navigation/navigator";
import { generalStyle } from "../../../style/general";
import { inputStyle } from "../../../style/input";
import { btnStyle } from "../../../style/button";
import GeneralList, { ListItems } from "../../../components/general_list";
import constant from "../../../global/constant";
import { Divider } from "@rneui/themed";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import GeneralDivider from "../../../components/general_divider";
import UserSvg from "../../../svg/user_svg";


const MyEmployeeView: React.FunctionComponent = ({ navigation }: any) => {

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const userList = [{title:"박예지",content:"01011112222"},{title:"박예지",content:"01011112222"},
    {title:"박예지",content:"01011112222"},{title:"박예지",content:"01011112222"},{title:"박예지",content:"01011112222"}
  ,{title:"박예지",content:"01011112222"},{title:"박예지",content:"01011112222"},{title:"박예지",content:"01011112222"}
  ,{title:"박예지",content:"01011112222"}]

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarView />
      <BackArrowTitle title={"나의 점포"}></BackArrowTitle>

      <View style={{ flex:1, padding: constant.viewPadding }}>

        <View><Text style={{ fontSize: 25, fontWeight: "bold", color: "#000000" }}>CU 신촌문화점</Text></View>

        <View style={generalStyle.greyArea}>
          <View style={{ flexDirection: "row" }}>

            <View style={{ flex: 3 }}>
              <Text style={{ fontSize: 17, fontWeight: "bold", color: "#000000" }}>점포명</Text>
            </View>
            <View style={{ flex: 7 }}>
              <Text style={{ fontSize: 17, color: "#000000" }}>: CU 신촌문화점</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 3 }}>
              <Text style={{ fontSize: 17, fontWeight: "bold", color: "#000000" }}>점포주소</Text>
            </View>
            <View style={{ flex: 7 }}>
              <Text style={{ fontSize: 17, color: "#000000" }}>: 서울시 서대문구 신촌역로 44</Text>
            </View>
          </View>
          


        </View>

        <GeneralDivider/>
        <View style={{ flexDirection: "row",  }}>
          <View style={{ flex: 3, justifyContent:'center', top:5 }}>
            <TouchableOpacity
              style={[styles.circle]}
            >
              <UserSvg />
            </TouchableOpacity>
          </View>

          
          <View style={{ flex: 7, paddingHorizontal: 10, justifyContent:'center'}}>

            
            <View style={generalStyle.greyArea}>
              <View style={{ flexDirection: "row" }}>

                <View style={{ flex: 3 }}>
                  <Text style={{ fontSize: 17, fontWeight: "bold", color: "#000000" }}>성명</Text>
                </View>
                <View style={{ flex: 7 }}>
                  <Text style={{ fontSize: 17, color: "#000000" }}>: 박예지</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 3 }}>
                  <Text style={{ fontSize: 17, fontWeight: "bold", color: "#000000" }}>상태</Text>
                </View>
                <View style={{ flex: 7 }}>
                  <Text style={{ fontSize: 17, color: "#000000" }}>: 근무승인</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 3 }}>
                  <Text style={{ fontSize: 17, fontWeight: "bold", color: "#000000" }}>정보</Text>
                </View>
                <View style={{ flex: 7 }}>
                  <Text style={{ fontSize: 17, color: "#000000" }}>: 01011115555</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Pressable style={[smallPurpleBtn, { marginTop: 40 }]}
          onPress={()=>navigation.reset({routes: [{name: "Home", }]})}>
            <Text style={styles.btnText}>확인</Text>
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
    fontSize: 17,
    fontWeight: "bold"
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
const grey = StyleSheet.flatten([generalStyle.generalInput, inputStyle.grey, generalStyle.shadow]);
const purpleBtn = StyleSheet.flatten([generalStyle.roundBtn, btnStyle.purple, generalStyle.shadow, generalStyle.btnNormalSizeNoWidth]);
const smallPurpleBtn = StyleSheet.flatten([generalStyle.generalBtn, btnStyle.purple, generalStyle.btnSmallSize]);
export default MyEmployeeView;
