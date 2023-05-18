import React, { ComponentElement } from "react";
import {

  Platform, SafeAreaView,
  StatusBar,
  StatusBarProps,
  StyleSheet, Text,

  View, ViewComponent
} from "react-native";
import GeneralStatusBar from "./general_status_bar";
import StatusBarView from "./status_bar_view";
import { ParentCompProps } from "../screens/auth/register";
import { ViewProps } from "react-native/Libraries/Components/View/ViewPropTypes";


class StatusBarScreen extends React.Component<ViewProps> {

  render(){
    return(
      <><SafeAreaView style={styles.container}>
        <GeneralStatusBar backgroundColor="#4B0082" barStyle="light-content" />
        <View style={styles.statusBar}>
          <Text style={styles.mainName}>편텍트</Text>
        </View>
        {this.props.children}
      </SafeAreaView>
      </>);
  }
};
const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor : '#FFFFFF'
  },
  statusBar: {
    alignItems: 'center',
    backgroundColor : '#4B0082',
    paddingBottom : 10,
    paddingTop : 20,
    borderBottomLeftRadius : 10,
    borderBottomRightRadius : 10
  },
  mainName: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
    backgroundColor: '#FFFFFF'

  }
});
export default StatusBarScreen;
