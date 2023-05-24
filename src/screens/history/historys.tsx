import React, { Children, useState } from "react";
import { Animated, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
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
import HistoryList from "../../components/history_list";
import HistoryDetail from "./history_detail";


const Historys: React.FunctionComponent = ({navigation}:any) => {

  const historyList =
    [{title:"[자동신고] GS25 신촌기차역점",content1:"2022.02.06.",content2:"202202061222","pk":1, type:"자동"},
    {title:"[수동신고] GS25 서울역점",content1:"2022.02.07.",content2:"202202071222","pk":2, type:"수동"},
  ]

    const handleItemPress = (itemIndex: any) => {
      switch (itemIndex) {
        case 0:
          navigation.navigate('HistoryDetailOne');
          break;
        case 1:
          navigation.navigate('HistoryDetailTwo');
          break;
        case 2:
          navigation.navigate('HistoryDetailThree');
          break;
        case 3:
          navigation.navigate('HistoryDetailFour');
          break;
        case 4:
          navigation.navigate('HistoryDetailFive');
          break;
        default:
          break;
      }
    };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarView />
      <BackArrowTitle title={'신고 내역 조회'}></BackArrowTitle>
      <View style={{ flex:1, margin : 20, padding : 10, backgroundColor : '#E6E6E6', borderRadius : 10}} >
      <HistoryList items={historyList} onClick={(pk)=>{
        var h = historyList.find((p)=>p.pk == pk);
        console.log("h:" + h!.content2);
        navigation.push('HistoryDetail', {historyType:h!.type,
          historyPk : h!.content2,
          historyDate : h!.content1});
        }}/>
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
    fontSize: 17,
    fontWeight: "bold"
  },
  btnText: {
    color: "#FFFFFF"
  }
});
const grey = StyleSheet.flatten([generalStyle.generalInput, inputStyle.grey, generalStyle.shadow]);
const purpleBtn = StyleSheet.flatten([generalStyle.roundBtn, btnStyle.purple, generalStyle.shadow, generalStyle.btnSmallSize]);
export default Historys;
