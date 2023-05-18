import React from "react";
import {

  Platform,
  StatusBar,
  StatusBarProps,
  StyleSheet, Text,

  View, ViewComponent, ViewProps
} from "react-native";
import GeneralStatusBar from "./general_status_bar";


function StatusBarView() {
  return (
    < ><GeneralStatusBar backgroundColor="#4B0082" barStyle="light-content" />
      <View style={styles.statusBar}>
      <Text style={styles.mainName}>편텍트</Text>
    </View>
    </>

  );
};
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const styles =StyleSheet.create({
  statusBar: {
    alignItems: 'center',
    backgroundColor : '#4B0082',
    paddingBottom : 10,
    paddingTop : 20,
    borderBottomLeftRadius : 10,
    borderBottomRightRadius : 10
  },
  mainName:{
    fontSize : 24,
    color:'#FFFFFF',
    fontWeight : 'bold'

  }
});
export default StatusBarView;
