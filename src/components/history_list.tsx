import React from "react";
import {

  Platform,
  StatusBar,
  StatusBarProps,
  StyleSheet, Text,
  FlatList,
  View, Pressable
} from "react-native";
import { Divider } from "@rneui/themed";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";

export type ListItems = {
  title: string;
  content1: string;
  content2: string;
  pk:number
  type:string
};

export type ListItem = {
  items : ListItems[],
  onClick : (v:number)=>void
};


const HistoryList: React.FunctionComponent<ListItem> = ({...props}) => {
  return (

    <FlatList  data={
      props.items
    } renderItem={
      ({item})=>
        <Pressable onPress={()=>{
        props.onClick(item.pk);
        }}>
        <View style={{flexDirection:'column', borderStyle : 'solid', borderWidth : 3, borderColor : '#D2D2D2', backgroundColor:'#FFFFFF'
          , borderRadius : 10, padding : 7, marginBottom : 5}}>
          <View style={{flex:1}}><Text style={{fontSize : 20, fontWeight : 'bold',color :'#000000'}} >{item.title}</Text></View>
          <View style={{flex:1, flexDirection:'row'}}>
            <View style={{flex:1}}><Text style={{fontSize:13, color:'#000000'}}>{item.content1}</Text></View>
            <View style={{flex:1, alignItems:'flex-end'}}><Text style={{fontSize:13, color:'#000000'}}>{item.content2}</Text></View>
          </View>
        </View>
        </Pressable>
    } keyExtractor={(item, index) => index.toString()}>
    </FlatList>

  );
};

export default HistoryList;
