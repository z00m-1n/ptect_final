import React, { Children, PropsWithChildren, useState } from "react";
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
import BackArrowTitle, { Props } from "../../components/backarrow_title";
import constant from "../../global/constant";
import { generalStyle } from "../../style/general";
import { btnStyle } from "../../style/button";
import navigator, { RootStackParamList, Screens } from "../../navigation/navigator";
import { ParamListBase, RouteProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import Home from "../home";

type SelectCompleteProps = NativeStackScreenProps<RootStackParamList, "SelectComplete">;
const SelectComplete= function({route,navigation}:SelectCompleteProps) {
  const {isStore} = route.params;
  const { width, height } = Dimensions.get("screen");

  const txt = isStore?'점포 등록이 완료되었습니다.':'근무 요청이 완료되었습니다.';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarView />
      <BackArrowTitle  title={"점포 등록"}></BackArrowTitle>
      <KeyboardAwareScrollView contentContainerStyle={{flex:1}}>
        <View style={{ padding: constant.viewPadding, flex :1,  justifyContent: "center", alignItems: "center",
        }}>

          <Text style={styles.mainText}>{txt}
          </Text>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Pressable style={[purpleBtn, { marginTop: 40 }]} onPress={
              ()=>navigation.reset({routes: [{name: "Home", }]})
            }>
              <Text style={styles.btnText}>확인</Text>
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
    fontSize: 25, fontWeight: "bold", color: "#000000"
  },
    subText: {
      fontSize: 14,

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


export default SelectComplete;
