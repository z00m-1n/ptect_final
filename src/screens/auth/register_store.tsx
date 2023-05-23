import React, { Children, useState } from "react";
import {
  Animated,
  Button,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import StatusBarView from "../../components/status_bar_view";
import BackArrowTitle from "../../components/backarrow_title";
import FlatList = Animated.FlatList;
import { generalStyle } from "../../style/general";
import { inputStyle } from "../../style/input";
import { btnStyle } from "../../style/button";
import GeneralList from "../../components/general_list";
import { SearchBar } from "@rneui/themed";
import CustomSearchbar from "../../components/searchbar";
import Constant from "../../global/constant";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import navigator, { RootStackParamList } from "../../navigation/navigator";
import Postcode from "@actbase/react-daum-postcode";


interface Props {
  saveStore: ()=>void
}
type RegisterStoreProps = NativeStackScreenProps<RootStackParamList, "RegisterStore">;
const RegisterStore = function({route, navigation}:RegisterStoreProps) {

  const [name, setName] = useState('')
  const [address, setAddress] = useState('');
  const [isModal, setModal] = useState(false);
  const ShowPostCode = () => {

    return (
      <>
        <Modal visible={isModal}>
          <Postcode
            style={{ width: 320, height: 320 }}
            jsOptions={{ animation: true, hideMapBtn: true }}
            onSelected={data => {
              setAddress(data.address);
              setModal(false);
            }} onError={function(error: unknown): void {
            throw new Error("Function not implemented.");
          }}          />
          <Button onPress={() => setModal(true)} title={'주소찾기'}></Button>
          <Button onPress={() => setModal(false)} title={'닫기'}></Button>
        </Modal>

      </>
    );
  }

  const onClick = route.params.onClick;
  console.log(onClick);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBarView />
      <BackArrowTitle title={'점포 등록'}></BackArrowTitle>
      <KeyboardAwareScrollView>
        <View style={styles.area1}>
          <Text style={styles.mainText}>로그인</Text>
        </View>
        <View style={{ marginTop: 100, paddingHorizontal: Constant.paddingHorizontal }}>
          <TextInput onChangeText={newText => setName(newText)}
                     defaultValue={name} style={[grey, { marginTop: 0 }]} placeholder="이름 입력"
                     placeholderTextColor="#FFFFFF">

          </TextInput>
        </View>
        <View style={{ marginTop: 20, paddingHorizontal: Constant.paddingHorizontal }}>
          <Pressable onPress={()=>setModal(true)}>
          <TextInput editable={false}  onChangeText={newText => setAddress(newText)}
                     defaultValue={address} style={[grey, { marginTop: 0 }]} placeholder="주소 입력"
                     placeholderTextColor="#FFFFFF">

          </TextInput>
          </Pressable>
        </View>
        <View style={{ paddingHorizontal: Constant.paddingHorizontal, alignItems: "center" }}>

          <View style={{ marginTop: 50 }}>
            <Pressable onPress={()=>{
              route.params.onClick(name, address);
              navigation.pop();
            }}  style={[purpleBtn, { marginTop: 0 }]}>
              <Text style={styles.btnText}>저장</Text>
            </Pressable>
          </View>

        </View>
        {isModal?<ShowPostCode/>:''}
      </KeyboardAwareScrollView>

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
export default RegisterStore;