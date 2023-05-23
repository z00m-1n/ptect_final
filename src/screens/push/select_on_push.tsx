import React, { Children, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import GeneralStatusBar from "../../components/general_status_bar";
import StatusBarView from "../../components/status_bar_view";
import StatusBarScreen from "../../components/status_bar_screen";
import Constant from "../../global/constant";
import { btnStyle } from "../../style/button";
import { generalStyle } from "../../style/general";
import { inputStyle } from "../../style/input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/navigator";
import { ParamListBase, useNavigation } from "@react-navigation/native";


type SelectOnPushProps = NativeStackScreenProps<RootStackParamList, "SelectOnPush">;
const SelectOnPush= function({route, navigation}:SelectOnPushProps)  {

  const [doReport, setDoReport] = useState(false);
  //const navigations = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  console.log(route);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBarView />
          <View style={{ flex: 3 }}>
            <View style={styles.area1}>
              <Text style={styles.mainText}>자동신고접수</Text>
            </View>
          </View>
          <View style={{ flex: 7, alignItems: "center" }}>
            <Text style={[styles.mainText,{marginHorizontal:50, textAlign:'center', flexWrap:'wrap'}]}>{route.params.body}</Text>
            {doReport?<Text style={[styles.mainText,{marginHorizontal:50, textAlign:'center', flexWrap:'wrap'}]}>자동신고가 접수되었습니다.</Text>:''}

            {doReport?'':<View style={{ marginTop: 20 }}>
              <Pressable style={[purpleBtn, { marginTop: 0 }]} onPress={()=>{
                setDoReport(true);
              }}>
                <Text style={styles.btnText}>신고접수</Text>
              </Pressable>
            </View>}
            <View style={{ marginTop: doReport?30:10 }}>
              <Pressable style={[purpleBtn, { marginTop: 0 }]}
               onPress={()=>navigation.reset({routes: [{name: "Home", }]})}
              >
                <Text style={styles.btnText}>{doReport?'확인':'신고취소'}</Text>
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
    color:"#000000"
  },
  btnText: {
    color: "#FFFFFF"
  }
});

const purpleBtn = StyleSheet.flatten([generalStyle.generalBtn, btnStyle.purple, generalStyle.btnSmallSize]);
export default SelectOnPush;