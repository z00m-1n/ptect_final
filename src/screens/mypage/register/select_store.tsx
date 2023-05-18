import React, { Children, useState } from "react";
import {
  Animated,
  Dimensions, Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import StatusBarView from "../../../components/status_bar_view";
import BackArrowTitle from "../../../components/backarrow_title";
import constant from "../../../global/constant";
import { generalStyle } from "../../../style/general";
import { inputStyle } from "../../../style/input";
import { btnStyle } from "../../../style/button";
import { SearchBar } from "@rneui/themed";
import GeneralDivider from "../../../components/general_divider";


import Pay1 from "@images/pay1.png";
import Pay2 from "@images/pay2.png";
const SelectStore: React.FunctionComponent = () => {

  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const { width, height } = Dimensions.get("screen");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarView />
      <BackArrowTitle title={'점포 등록'}></BackArrowTitle>
      <View style={{ padding: constant.viewPadding }}>
        <View style={{
          justifyContent: "center", alignItems: "center",
          marginHorizontal: width * 0.05, marginTop : 30
        }}>
          <Text style={styles.mainText}>선택하신 점포
          </Text>
          <Text style={styles.mainText}>[CU 신촌문화 점]
          </Text>
          <Text style={styles.subText}>서울시 서대문구 신촌역로 44
          </Text>
          <Text style={styles.mainText}>에 대하여 점포를 등록하겠습니다.
          </Text>
        </View>
        <GeneralDivider/>
        <View style={{
          justifyContent: "center", alignItems: "center",
          marginHorizontal: width * 0.05, marginTop : 30
        }}>
          <Text style={styles.mainText}>구독할 요금제를 선택해주세요.
          </Text>

        </View>
        <View style={{ flexDirection: "row", marginTop:30 }}>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Pressable style={[generalStyle.simpleGreyArea, { justifyContent: "center", alignItems: "center", marginHorizontal:10 }]}>
              <Image style={{ width: 60,
                height: 60, resizeMode: 'stretch',}}
                     source={Pay1}
              ></Image>
              <Text style={{fontSize:15, color:'#000000', fontWeight:'500', marginTop:10}}>요금제1</Text>
            </Pressable>
          </View>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <Pressable style={[generalStyle.simpleGreyArea, { justifyContent: "center", alignItems: "center", marginHorizontal:10 }]}>
              <Image style={{ width: 60,
                height: 60, resizeMode: 'stretch',}}
                     source={Pay2}
              ></Image>
              <Text style={{fontSize:15, color:'#000000', fontWeight:'500', marginTop:10}}>요금제2</Text>
            </Pressable>
          </View>
        </View>
      </View>

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
    fontSize: 22,
    fontWeight: "500"
  },
  subText: {
    fontSize: 14,

  },
  btnText: {
    color: "#FFFFFF"
  }
});
const grey = StyleSheet.flatten([generalStyle.generalInput, inputStyle.grey, generalStyle.shadow]);
StyleSheet.flatten([generalStyle.roundBtn, btnStyle.purple, generalStyle.shadow, generalStyle.btnSmallSize]);
export default SelectStore;
