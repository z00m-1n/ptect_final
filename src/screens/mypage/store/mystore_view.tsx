import React, { Children, useState } from "react";
import { Animated, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import StatusBarView from "../../../components/status_bar_view";
import BackArrowTitle from "../../../components/backarrow_title";
import FlatList = Animated.FlatList;
import { generalStyle } from "../../../style/general";
import { inputStyle } from "../../../style/input";
import { btnStyle } from "../../../style/button";
import GeneralList, { ListItem } from "../../../components/general_list";
import constant from "../../../global/constant";
import { Divider } from "@rneui/themed";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


const MyStoreView: React.FunctionComponent = ({navigation}:any) => {

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

        <View><Text style={{ fontSize: 25, fontWeight: "bold", color: "#000000" }}>신고 상세 정보</Text></View>

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
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 3 }}>
              <Text style={{ fontSize: 17, fontWeight: "bold", color: "#000000" }}>신고 유형</Text>
            </View>
            <View style={{ flex: 7 }}>
              <Text style={{ fontSize: 17, color: "#000000" }}>: 신고 유형 (자동수동)</Text>
            </View>
          </View>


        </View>

        <Divider orientation="horizontal" width={1} color={"#000000"} style={{ marginTop: 30 }} />
        <View style={{flexDirection : 'row', marginTop:5}}>
          <View style={{flex:10, alignItems:'center'}}>

            <Pressable style={[purpleBtn, { marginTop: 0,  }]}>
              <Text style={styles.btnText}>승인된 근로자</Text>
            </Pressable>
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
           <View style={{   height: 50,
             width: 2,
             backgroundColor: '#909090',}}></View>
          </View>
          <View style={{flex:10, alignItems:'center'}}>

            <Pressable style={[purpleBtn, { marginTop: 0,  }]}>
              <Text style={styles.btnText}>신청한 근로자</Text>
            </Pressable>
          </View>

        </View>
        <Divider orientation="horizontal" width={1} color={"#000000"} style={{ marginTop: 5 }} />
        <View style={{ flex:1, marginTop:30, padding : 10, backgroundColor : '#E6E6E6', borderRadius : 10}}>
          <Pressable onPress={()=> navigation.push('MyEmployeeView')}>
            <GeneralList items={userList}/>
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
  }
});
const grey = StyleSheet.flatten([generalStyle.generalInput, inputStyle.grey, generalStyle.shadow]);
const purpleBtn = StyleSheet.flatten([generalStyle.roundBtn, btnStyle.purple, generalStyle.shadow, generalStyle.btnNormalSizeNoWidth]);
export default MyStoreView;
