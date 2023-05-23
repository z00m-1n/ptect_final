import React, { Children, useState } from "react";
import { Animated, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import StatusBarView from "../../components/status_bar_view";
import BackArrowTitle from "../../components/backarrow_title";
import FlatList = Animated.FlatList;
import { generalStyle } from "../../style/general";
import { inputStyle } from "../../style/input";
import { btnStyle } from "../../style/button";
import GeneralList, { ListItem } from "../../components/general_list";
import { SearchBar } from "@rneui/themed";
import CustomSearchbar from "../../components/searchbar";
import { useRecoilState } from "recoil";
import { authSelector } from "../../recoil/auth";
import SelectWork from "./select_work";



const RegisterStoreList: React.FunctionComponent = ({navigation}:any) => {

  const [searchPhrase, setSearchPhrase] = useState('')
  const [clicked, setClicked] = useState(false);
  const [item, setItem] = useState<ListItem>();
  const [auth, setAuth] = useRecoilState(authSelector);
  function storeClick(name:string, address:string)
  {
        console.log(name);
        if (auth.role == "OWNER")
        {
          navigation.push('SelectStore',{storeName:name});
        }
        else
        {
          navigation.push('SelectWork',{storeName:name});
        }

  }
  function test()
  {
    navigation.push('SelectStore',{storeName:"test"});
  }
  function onClick(name:string, address:string)
  {
    let append;
    if (item)
    {
      append =  {items:[{
          title: name,
          content: address,
          onClick:storeClick
        },...item?.items!]
      };
    }
    else
    {
      append =  {items:[{
          title: name,
          content: address,
          onClick:storeClick
        }]
      };
    }


    console.log(append)
      setItem(append);
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBarView />
      <BackArrowTitle title={'점포 등록'}></BackArrowTitle>
      <CustomSearchbar onClick={()=>{

        navigation.push('RegisterStore', {onClick:onClick});

      }} clicked={clicked} setClicked={setClicked} searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} ></CustomSearchbar>
      {item && item!.items.length > 0 ?<View style={{ margin : 20, padding : 10, backgroundColor : '#E6E6E6', borderRadius : 10}}>
        <GeneralList items={item?.items!}/>
      </View> :''}
      {/*
    <Pressable onPress={test}>
      <Text style={{color:"#000000"}}>test</Text>
    </Pressable> */}

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
export default RegisterStoreList;
