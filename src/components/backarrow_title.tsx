import React from "react";
import {
  Image,

  Platform, Pressable,
  StatusBar,
  StatusBarProps,
  StyleSheet, Text,

  View, ViewComponent, ViewProps
} from "react-native";

import backArrow from "../../assets/images/backarrow.png";
import BackArrowSvg from "../svg/backarrow_svg";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
export type Props = {
  title: string;
  showArrow?: boolean;
};

function BackArrowTitle({...props}:Props) {
  const navigations = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  props.showArrow = props.showArrow == null?true: props.showArrow;
  return (


      <View style={{ flexDirection: "row", paddingTop : 15 }}>
        <View style={{ flex: 1,  paddingVertical : 0, left:20 }}>
        {props.showArrow?<Pressable onPress={()=>{
            navigations.pop(1);
          }}><BackArrowSvg/></Pressable>:''}
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{fontSize:17, fontWeight:'bold', color:'#000000'}}>{props.title}</Text>
        </View>
        <View style={{ flex: 1,justifyContent: "center", alignItems: "center" }}>

        </View>
      </View>

  );
}

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
const styles = StyleSheet.create({
  statusBar: {
    alignItems: "center",
    backgroundColor: "#4B0082",
    paddingBottom: 10,
    paddingTop: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  mainText: {
    fontSize: 17,
    fontWeight: "bold"
  }
});
export default BackArrowTitle;
