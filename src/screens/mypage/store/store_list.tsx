import React, { Children, useState } from "react";
import { Animated, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import StatusBarView from "../../../components/status_bar_view";
import BackArrowTitle from "../../../components/backarrow_title";
import FlatList = Animated.FlatList;
import { generalStyle } from "../../../style/general";
import { inputStyle } from "../../../style/input";
import { btnStyle } from "../../../style/button";
import GeneralList, { ListItems } from "../../../components/general_list";
import { Divider } from "@rneui/themed";


const storeList = [{title:"GS25 신촌기차역점",content:"서울시 서대문구 신촌역로 44"},{title:"CU 신촌문화점",content:"서울시 서대문구 신촌역로 44"},{title:"CU 신촌문화점",content:"서울시 서대문구 신촌역로 44"}
,{title:"CU 신촌문화점",content:"서울시 서대문구 신촌역로 44"},{title:"CU 신촌문화점",content:"서울시 서대문구 신촌역로 44"},{title:"CU 신촌문화점",content:"서울시 서대문구 신촌역로 44"}
,{title:"CU 신촌문화점",content:"서울시 서대문구 신촌역로 44"},{title:"CU 신촌문화점",content:"서울시 서대문구 신촌역로 44"},{title:"CU 신촌문화점",content:"서울시 서대문구 신촌역로 44"},{title:"CU 신촌문화점",content:"서울시 서대문구 신촌역로 44"}
  ,{title:"CU 신촌문화점",content:"서울시 서대문구 신촌역로 44"},{title:"CU 신촌문화점",content:"서울시 서대문구 신촌역로 44"}]
const StoreList: React.FunctionComponent = () => {

  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');


  return (
    <SafeAreaView style={styles.container}>
      <StatusBarView />
      <BackArrowTitle title={'나의 점포'}></BackArrowTitle>

      <Divider orientation="horizontal" width={1} color={"#000000"} style={{ marginTop: 30 }} />

      <View style={{flexDirection : 'row', marginTop:5}}>
        <View style={{flex:10, alignItems:'center'}}>

          <Pressable style={[purpleBtn, { marginTop: 0,  }]}>
            <Text style={styles.btnText}>승인된 편의점</Text>
          </Pressable>
        </View>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <View style={{   height: 50,
            width: 2,
            backgroundColor: '#909090',}}></View>
        </View>
        <View style={{flex:10, alignItems:'center'}}>

          <Pressable style={[purpleBtn, { marginTop: 0,  }]}>
            <Text style={styles.btnText}>신청한 편의점</Text>
          </Pressable>
        </View>

      </View>
      <Divider orientation="horizontal" width={1} color={"#000000"} style={{ marginTop: 5 }} />
      <View style={{ flex:1, margin : 20, padding : 10, backgroundColor : '#E6E6E6', borderRadius : 10}}>
        <GeneralList items={storeList}/>
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
const purpleBtn = StyleSheet.flatten([generalStyle.roundBtn, btnStyle.purple, generalStyle.shadow, generalStyle.btnNormalSizeNoWidth]);
export default StoreList;
