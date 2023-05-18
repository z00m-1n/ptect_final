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


const Historys: React.FunctionComponent = ({navigation}:any) => {

  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const historyList = [
    {title:"[자동신고] GS25 신촌기차역점",content1:"2022.02.06.",content2:"202202061222"} ,
    {title:"[자동신고] GS25 신촌기차역점",content1:"2022.02.06.",content2:"202202061222"},
    {title:"[자동신고] GS25 신촌기차역점",content1:"2022.02.06.",content2:"202202061222"},
    {title:"[자동신고] GS25 신촌기차역점",content1:"2022.02.06.",content2:"202202061222"},
    {title:"[자동신고] GS25 신촌기차역점",content1:"2022.02.06.",content2:"202202061222"},
    {title:"[자동신고] GS25 신촌기차역점",content1:"2022.02.06.",content2:"202202061222"}]

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarView />
      <BackArrowTitle title={'신고 내역 조회'}></BackArrowTitle>
      <View style={{ flex:1, margin : 20, padding : 10, backgroundColor : '#E6E6E6', borderRadius : 10}} >
        <Pressable onPress={()=> navigation.push('HistoryDetail')}>
          <HistoryList items={historyList} />
        </Pressable>
      
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
