import React from "react";
import {

  Platform,
  StatusBar,
  StatusBarProps,
  StyleSheet, Text,
  FlatList,
  View
} from "react-native";
import { Divider } from "@rneui/themed";

export type ListItems = {
  title: string;
  content1: string;
  content2: string;
};

export type ListItem = {
  items : ListItems[]
};


const HistoryList: React.FunctionComponent<ListItem> = ({...props}) => {
  return (

    <FlatList  data={
     props.items
    } renderItem={
      ({item})=>
        <View style={{flexDirection:'column', borderStyle : 'solid', borderWidth : 3, borderColor : '#D2D2D2', backgroundColor:'#FFFFFF'
          , borderRadius : 10, padding : 7, marginBottom : 5}}>
          <View style={{flex:1}}><Text style={{fontSize : 20, fontWeight : 'bold',color :'#000000'}} >{item.title}</Text></View>
          <View style={{flex:1, flexDirection:'row'}}>
            <View style={{flex:1}}><Text style={{fontSize:13, color:'#000000'}}>{item.content1}</Text></View>
            <View style={{flex:1, alignItems:'flex-end'}}><Text style={{fontSize:13, color:'#000000'}}>{item.content2}</Text></View>
          </View>
        </View>
    }>
    </FlatList>

  );
};

export default HistoryList;
