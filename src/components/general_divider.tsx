import React from "react";
import {

  Platform,
  StatusBar,
  StatusBarProps,
  StyleSheet,

  View
} from "react-native";
import { Divider } from "@rneui/themed";


const GeneralDivider: React.FunctionComponent<StatusBarProps> = () => {
  return (
    <Divider orientation="horizontal" width={1} color={"#000000"} style={{ marginVertical: 50 }} />

  );
};

export default GeneralDivider;
